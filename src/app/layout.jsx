import "./base/reset.scss";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";

export const metadata = {
  title: "صنایع چوب مهرشاد | کابینت سازی مهرشاد",
  description:
    "صنایع چوبی مهرشاد تولید کننده ی درب و دکوراسیون داخلی و سیستم آشپزخانه و غیره. کابینت آشپزخانه یکی از مهم ترین اجزای یک آشپزخانه است که هم به آن زیبایی می دهد و هم باعث ایجاد نظم می شود. برای اطلاع از قیمت مدل های جدید کابینت و راهنمایی برای انتخاب کابینت مناسب برای منزل خود با کابینت ساز تماس بگیرید.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
