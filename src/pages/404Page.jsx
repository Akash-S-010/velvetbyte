// NotFoundPage.jsx
import React, { useEffect, useState } from "react";
import { Home, ArrowLeft,  Loader2 } from "lucide-react";

const NotFoundPage = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/"; // 👈 works in plain React apps
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background flex justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up space-y-6 sm:space-y-8">
          {/* Animated Circle */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto animate-bounce-in">
            {animationLoaded ? (
              <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary/80">
                  404
                </span>
              </div>
            ) : (
              <div className="w-full h-full bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Loader2 className="w-12 h-12 animate-spin" />
              </div>
            )}
          </div>

          {/* Text content */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Oops! Page Not Found
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            The page you're looking for seems to have wandered off into the
            digital wilderness. Don’t worry, it happens to the best of us!
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={handleGoHome}
              className="flex items-center bg-primary/80 hover:bg-primary transition-colors px-6 py-3 rounded-lg cursor-pointer font-semibold"
              aria-label="Go to home"
            >
              <Home className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-105" />
              Take Me Home
            </button>

            <button
              onClick={handleGoBack}
              className="flex items-center bg-black/80 hover:bg-black transition-colors text-white px-6 py-3 rounded-lg cursor-pointer font-semibold"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Go Back
            </button>
          </div>

          <p
            className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            If you think this is a mistake, please{" "}
            <a
              href="mailto:support@example.com"
              className="text-foreground/70 hover:text-foreground hover:underline transition-colors duration-200 font-medium"
            >
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
