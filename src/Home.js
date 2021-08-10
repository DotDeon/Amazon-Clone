import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="312"
            title="Samsung Galaxy Watch 3 (45mm) Bluetooth - Mystic Black Smart Watch"
            price={7629}
            img="https://res.cloudinary.com/dvv9fvblr/image/upload/v1599032214/nokssqfzzkod0mjskqjh.png"
            rating={2}
          />
          <Product
            id="315"
            title="Samsung Galaxy Watch 3 (41mm) Bluetooth - Mystic Bronze Smart Watch"
            price={7159}
            img="https://res.cloudinary.com/dvv9fvblr/image/upload/v1599030963/pgxdkohe1q6ndwbcvimz.png"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="6534"
            title="MSI GeForce RTX 2070 Super Gaming X 8GB GDDR6 Graphics Card"
            price={11839}
            img="https://res.cloudinary.com/dvv9fvblr/image/upload/v1581513051/ojrzsrnzpq0kapjbkyb3.png"
            rating={5}
          />
          <Product
            id="653"
            title="MSI GeForce RTX 2080 Super Ventus XS OC 8GB GDDR6 Graphics Card"
            price={15319}
            img="https://res.cloudinary.com/dvv9fvblr/image/upload/v1587386170/caaairvrkgjifdn6barp.png"
            rating={3}
          />
          <Product
            id="5345"
            title="MSI GeForce RTX 2080 Super Gaming X Trio 8GB GDDR6 Graphics Card"
            price={15599}
            img="https://res.cloudinary.com/dvv9fvblr/image/upload/v1581514112/mmy4xzp5fnf7ctpzrgns.png"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="SAMSUNG CURVED GAMING 49"
            price={23669}
            img="https://i.ebayimg.com/images/g/ALYAAOSwDh1e8gPu/s-l1600.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
