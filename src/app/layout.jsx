import "../../dist/main.css";
import ScrollToTop from "./components/ScrollToTop";
import WorkSamplesContext from "./context/WorkSamplesContext";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import AnimCursor from "./components/AnimCursor";

export const metadata = {
  title: "صنایع چوب مهرشاد | کابینت سازی مهرشاد",
  description:
    "صنایع چوب مهرشاد, تولید و ساخت انواع کابینت mdf و ممبران با بهترین کیفیت, کابینت سازی مهرشاد, بهترین قیمت کابینت سازی, کابینت, کابینت سازی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <WorkSamplesContext>
          <AnimCursor />
          <Header />
          <Navbar />
          {children}
          <ScrollToTop />
        </WorkSamplesContext>
      </body>
    </html>
  );
}
