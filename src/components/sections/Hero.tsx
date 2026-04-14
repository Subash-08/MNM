import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3]">

      {/* ── TOP ZONE ── */}
      <div className="relative">

        {/*
          DIVIDER LINE
          Sits between line 2 and line 3 of the heading.
          Positioned absolutely so "OUR EXPERTISE." text flows right over it.
          z-0 keeps it behind z-10 text.
        */}
        <div
          className="absolute left-0 w-full h-px bg-gray-300 z-0"
          style={{ top: "calc(100% - 66px)" }}
        />

        <div
          className="flex flex-col mt-10 md:flex-row items-start justify-between gap-6"
          style={{ padding: "56px 64px 0" }}
        >
          {/* LEFT: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 shrink-0"
          >
            <h1
              style={{
                fontFamily: "'Barlow', 'Arial Black', sans-serif",
                fontSize: "clamp(44px, 6.2vw, 76px)",
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: "#111",
                textTransform: "uppercase",
                fontWeight: 800,
                margin: 0,
              }}
            >
              <span style={{ display: "block" }}>GROW YOUR</span>
              <span style={{ display: "block" }}>
                INVESTMENTS&nbsp;
                <span style={{ fontWeight: 400 }}>WITH</span>
              </span>
              <span style={{ display: "block", fontWeight: 400 }}>
                OUR EXPERTISE.
              </span>
            </h1>
          </motion.div>

          {/* RIGHT: Body + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 shrink-0"
            style={{ maxWidth: 360, paddingTop: 4 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                color: "#555",
                marginBottom: 22,
              }}
            >
              We combine proven strategies with personalized guidance to help
              you build and secure your wealth for the future.
            </p>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f0d800" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.14 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffe600",
                color: "#111",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.02em",
                padding: "11px 20px",
                border: "none",
                borderRadius: 0,
                cursor: "pointer",
              }}
            >
              <ChevronRight size={15} strokeWidth={2.5} />
              Book A Meeting
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── IMAGE ZONE ── */}
      <div
        className="relative w-full"
        style={{ height: "clamp(360px, 48vw, 620px)" }}
      >
        <img
          src="https://cdn.prod.website-files.com/699974f71a3a047f90804ccc/699aa0f1db2209063fcc0a33_Gemini_Generated_Image_hr943dhr943dhr94%20(1).avif"
          alt="Professional at laptop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 18%" }}
          referrerPolicy="no-referrer"
        />

        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />

        {/*
          ANGLED CUT + YELLOW LINE
          ─────────────────────────
          Canvas: 1440 × 145

          Geometry (matching reference image):
            • bg fill covers top-left quadrant flat, then diagonals down to ~55% width
            • Flat again on the right at y=22 (thin strip)
            • Yellow line: starts at bottom-left corner of mask, follows diagonal up,
              then continues flat to right edge

          path breakdown:
            M0,0          → top-left
            L1440,0       → top-right
            L1440,22      → right, just below top (thin flat ledge on right)
            L800,22       → where diagonal meets right flat
            L545,145      → bottom of diagonal (at ~38% width)
            L0,145        → bottom-left
            Z             → close shape

          Yellow line traces: bottom-left → diagonal bottom → diagonal top → right edge
        */}
        <div
          className="absolute top-0 left-0 w-full z-10"
          style={{ height: "clamp(72px, 13vw, 148px)", marginTop: -1 }}
        >
          <svg
            viewBox="0 0 1440 148"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0,0 L1440,0 L1440,22 L800,22 L545,148 L0,148 Z"
              fill="#f5f5f3"
            />
            <path
              d="M0,148 L545,148 L800,22 L1440,22"
              fill="none"
              stroke="#ffe600"
              strokeWidth="5.5"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      </div>

      {/* Font import */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700;800&family=Inter:wght@400;600&display=swap"
      />
    </section>
  );
}