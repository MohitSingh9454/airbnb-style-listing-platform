const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const { listingSchema } = require("./schema.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// --------------------- VIEW ENGINE + MIDDLEWARE ---------------------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// --------------------- SESSION + FLASH ---------------------
const sessionConfig = {
  secret: "supersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

// Make flash messages & currUser available in all views
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = null;
  next();
});

// --------------------- ROUTES ---------------------
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// INDEX Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// SEARCH Route
app.get("/listings/search", async (req, res) => {
  const { q } = req.query;
  if (!q) return res.redirect("/listings");
  const allListings = await Listing.find({
    title: { $regex: q, $options: "i" },
  });
  res.render("listings/index.ejs", { allListings });
});

// NEW Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// SHOW Route
// SHOW Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    // This check handles the case where a valid-looking ID does not exist in the DB.
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
  })
);

// CREATE Route
app.post(
  "/listings",
  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if (result.error) {
      req.flash("error", "Invalid listing data");
      return res.redirect("/listings/new");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
  })
);

// EDIT Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

// UPDATE Route
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let result = listingSchema.validate(req.body);
    if (result.error) {
      req.flash("error", "Invalid listing data");
      return res.redirect(`/listings/${id}/edit`);
    }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
  })
);

// DELETE Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
  })
);

// --------------------- ERROR HANDLER ---------------------
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.render("error.ejs", { message });
});

// --------------------- USER ROUTES ---------------------
app.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

app.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// Handle login form submission
app.post("/login", (req, res) => {
  req.flash("success", "Logged in successfully!");
  res.redirect("/listings");
});

// Handle signup form submission
app.post("/signup", (req, res) => {
  req.flash("success", "Account created successfully!");
  res.redirect("/listings");
});

app.get("/test-success", (req, res) => {
  req.flash("success", "✅ Flash message is working!");
  res.redirect("/");
});

app.get("/test-error", (req, res) => {
  req.flash("error", "❌ Something went wrong!");
  res.redirect("/");
});

// --------------------- START SERVER ---------------------
app.listen(3001, () => {
  console.log("🚀 Server is running on port 3001");
});