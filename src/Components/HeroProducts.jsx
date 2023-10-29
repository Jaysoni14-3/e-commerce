import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroProducts = ({ heroProducts }) => {
  return (
    <div className="w-3/4 carousel">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {heroProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="hero-card bg-gradient-to-br from-neutral-200 from-10% via-neutral-100 via-30% to-white h-[280px] flex gap-6 select-none border px-6 py-4 rounded-sm">
              <div className="product-details flex flex-col">
                <div className="bg-yellow-100 w-max px-2 rounded-sm shadow-md select-none">
                  <span className="text-yellow-900">Lowest ever price!</span>
                </div>
                <div className="mt-auto">
                  <h4 className="text-textBlack ">
                    <Link to={`/product-details/${product.id}`}>
                      {product.title}
                    </Link>
                  </h4>
                  <p className="text-textBlack ">{product.brand}</p>
                </div>
              </div>
              <figure className="product-image">
                <img
                  className="max-w-xs h-auto object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroProducts;
