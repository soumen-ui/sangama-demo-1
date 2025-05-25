import React from "react";
import Slider from "react-slick";
import { getPrice, getOtherPrice, addToWishList } from "../helpers/Helper";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";


import productList from "./productList"; ///////    sm-own-page



// server side props. fetch api
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/1`);

    // Check if the response is valid
    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return a fallback or error page
    return {
      notFound: true,
    };
  }
}

export default function Home({ data }) {
  // console.log("Home data", data);
  const [banners, setBanners] = React.useState(data.banner);
  const [collections, setCollections] = React.useState(data.new_arrivals);
  const [featured, setFeatured] = React.useState(data.randomSraeeProducts);
  const [category, setCategory] = React.useState(data.categories);

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  const handleAddToWishlist = (productId) => {
    addToWishList(productId);
    Swal.fire({
      icon: "success",
      title: "Product added to wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // handle add to wishlist
  const handleWishlistClick = async (productId) => {
    let wishlist = await addToWishList(productId); // Await the asynchronous function
    if (wishlist.success) {
      Swal.fire({
        icon: "success",
        title: wishlist.message[0],
      });
    } else {
      Swal.fire({
        icon: "error",
        title: wishlist.message[0],
      });
    }
  };

  return (
    <>
      <section className="banner-section">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            {banners.map((banner, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={process.env.NEXT_PUBLIC_HOST_URL + banner.thumnanail}
                  className="d-block w-100"
                  alt={banner.altText || `Slide ${index + 1}`}
                  width={1920}
                  height={637}
                  // height={800}
                />
              </div>
            ))}
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </section>
      {/* Banner end */}




 <section className="fluid-block category pb-0">
        <div className="container">
            <div className="title-div text-center text-uppercase mb-5">
                <h2 className="fw-bold">Shop By Category</h2>
            </div>
            <div className="row">
                {collections.map((collection, index) => (
                <div className="col-lg-2 col-sm-4 col-6 mb-5">
                  
                    <Link href="product-listing.html"  key={index}  className="card text-center border-0"> 
                         {/* <img src="images/k-1.jpg" className="card-img-top" alt="Vinayaka Jewellers">  */}
                         <img
                      src={`${process.env.NEXT_PUBLIC_HOST_URL}${collection.featuredimage}`}
                      alt={collection.name}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                        <div className="card-body py-4 px-2">
                            <h5 className="card-title text-uppercase fw-bold">{data.categories && data.categories.length > index ? data.categories[index].cat_title : "Default Category"}</h5>
                           
                            {/* <h5 className="card-title text-uppercase fw-bold">Necklaces </h5> */}
                             
                             
                              {/* <h2>{data.categories && data.categories.length > index ? data.categories[index].cat_title : "Default Category"}</h2> */}
                     
                        </div>
                   </Link>

                    {/* <Link className={`card-img`} href={`/shop/${collection.slug}`} passHref>
                    <img
                      src={`${process.env.NEXT_PUBLIC_HOST_URL}${collection.featuredimage}`}
                      alt={collection.name}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                  </Link> */}
                </div>
              
                   ))}
              
                
                
            </div>
        </div>
    </section>


   <section className="fluid-block collections">
        <div className="container">
            <div className="title-div d-flex align-items-center justify-content-between">
                <div className="left">
                    <h2 className="text-uppercase fw-bold mb-0">New Arrivals</h2>
                    <ul className="d-flex align-items-center">
                        <li>Pure Silk</li>
                        <li><strong>25% Off collections</strong></li>
                    </ul>
                </div>
                <div className="right">
                     <Link  href="/shop" passHref className="btn btn-outline-primary text-uppercase">View All </Link>
                </div>
            </div>
            <div className="row g-5">
               {collections.map((collection, index) => (
                <div className="col-lg-3 "  key={index}>
                    <div className="card border-0 rounded-0" >
                         <Link href={`/shop/${collection.slug}`} passHref className="card-img">
                            <img 
                            src={`${process.env.NEXT_PUBLIC_HOST_URL}${collection.featuredimage}`} 
                            alt={collection.name} 
                            className="img-fluid" />
                        </Link>
                        <div className="card-body p-4 shadow-lg">
                            <div className="info">
                                <h4 className="fw-bold fs-5 pb-2">{collection.name}</h4>
                                <p>
                                  {collection.short_desc}
                                  </p>
                            </div>
                            <div className="price d-flex align-items-center">
                                <div className="left">
                                    <strong className="fs-4">₹ {getPrice(collection.mrp, collection.discounted_price, collection.product_type)}</strong>
                                </div>
                                <div className="right">
                                    <span className={`${collection.stock_status == 1 ? "text-success" : "text-danger"}`}>
                                      {collection.stock_status == 1 ? "In Stock" : "Out of Stock"}
                                      </span>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                
                  ))}
                 
            </div>
        </div>
    </section>

<div className="cc-product">
  
  





 {/* Category end  */}
<h3>TEST   ------    below part before footer is unchanged ------ TEST</h3>

<h6>test product list</h6>


  <section className="fluid-block collections">
        <div className="container">
          <div className="title-div text-center">
            <h2 className="text-uppercase mb-0 fw-bold">New Collections ----sssss</h2>
            <small>Explore the Latest Trends</small>
          </div>
          <div className="row g-5">
            {collections.map((collection, index) => (
              <div className="col-lg-3 col-md-4 col-sm-4 col-6" key={index}>
                <div className="card border-0 rounded-0">
                  <div className="wishlist-icon" title="Wishlist" onClick={() => handleWishlistClick(collection.id)}><i className="fa-regular fa-heart" /></div>
                  <Link className={`card-img`} href={`/shop/${collection.slug}`} passHref>
                    <img
                      src={`${process.env.NEXT_PUBLIC_HOST_URL}${collection.featuredimage}`}
                      alt={collection.name}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="card-body p-0 py-4">
                    <div className="info">
                      <Link href={`/shop/${collection.slug}`} passHref> <h3 className="fs-5">{collection.name}</h3></Link>
                      <p>{collection.short_desc}</p>
                    </div>
                    <div className="price d-flex align-items-center">
                      <div className="left d-flex align-items-center gap-2">
                        <strong className="fs-4">₹{getPrice(collection.mrp, collection.discounted_price, collection.product_type)}</strong>
                        <span className="text-decoration-line-through text-muted">₹{getOtherPrice(collection.mrp, collection.discounted_price, collection.product_type)}</span>
                      </div>
                      <div className="right">
                        <span className={`${collection.stock_status == 1 ? "text-success" : "text-danger"}`}>{collection.stock_status == 1 ? "In Stock" : "Out of Stock"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/shop" passHref>
              <span className="btn btn-secondary">View All <i className="bi bi-chevron-right" /></span>
            </Link>
          </div>
        </div>
      </section>


<h6>test product list----</h6>





</div>

      <section className="fluid-block collections">
        <div className="container">
          <div className="title-div text-center">
            <h2 className="text-uppercase mb-0 fw-bold">New Collections ----sssss</h2>
            <small>Explore the Latest Trends</small>
          </div>
          <div className="row g-5">
            {collections.map((collection, index) => (
              <div className="col-lg-3 col-md-4 col-sm-4 col-6" key={index}>
                <div className="card border-0 rounded-0">
                  <div className="wishlist-icon" title="Wishlist" onClick={() => handleWishlistClick(collection.id)}><i className="fa-regular fa-heart" /></div>
                  <Link className={`card-img`} href={`/shop/${collection.slug}`} passHref>
                    <img
                      src={`${process.env.NEXT_PUBLIC_HOST_URL}${collection.featuredimage}`}
                      alt={collection.name}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="card-body p-0 py-4">
                    <div className="info">
                      <Link href={`/shop/${collection.slug}`} passHref> <h3 className="fs-5">{collection.name}</h3></Link>
                      <p>{collection.short_desc}</p>
                    </div>
                    <div className="price d-flex align-items-center">
                      <div className="left d-flex align-items-center gap-2">
                        <strong className="fs-4">₹{getPrice(collection.mrp, collection.discounted_price, collection.product_type)}</strong>
                        <span className="text-decoration-line-through text-muted">₹{getOtherPrice(collection.mrp, collection.discounted_price, collection.product_type)}</span>
                      </div>
                      <div className="right">
                        <span className={`${collection.stock_status == 1 ? "text-success" : "text-danger"}`}>{collection.stock_status == 1 ? "In Stock" : "Out of Stock"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/shop" passHref>
              <span className="btn btn-secondary">View All <i className="bi bi-chevron-right" /></span>
            </Link>
          </div>
        </div>
      </section>


      {/* New Collections end */}
      <section className="fluid-block masonry pt-3 overflow-hidden">
        <div className="container-fluid">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card border-0">
                <div className="card-body position-relative p-0">
                  <div className="card-title position-absolute p-5 d-flex align-items-center">
                    <div className="title-wrap text-center w-100">
                      {/* <small className="text-white text-uppercase">New Arrivals</small> */}
                      <h2>{data.categories && data.categories.length > 0 ? data.categories[0].cat_title : "Default Category"}</h2>
                      <Link href={`/shop/category/${data.categories[0].slug}`} passHref>
                        <span className="btn btn-primary rounded-0">Explore Collections----</span>
                      </Link>
                    </div>
                  </div>
                  <div className="card-img">
                    <img
                      src="/assets/images/m-1.jpg"
                      alt="New Arrivals - Pure silk sarees"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0">
                <div className="card-body position-relative p-0">
                  <div className="card-title position-absolute p-5 d-flex align-items-center">
                    <div className="title-wrap text-center w-100">
                      {/* <small className="text-white text-uppercase">New Arrivals</small> */}
                      <h2>{data.categories && data.categories.length > 1 ? data.categories[1].cat_title : "Default Category"}</h2>
                      <Link href={`/shop/category/${data.categories[1].slug}`} passHref>
                        <span className="btn btn-primary rounded-0">Explore Collections ----****</span>
                      </Link>
                    </div>
                  </div>
                  <div className="card-img">
                    <img
                      src="/assets/images/m-2.jpg"
                      alt="New Arrivals - Party Wears"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card border-0">
                <div className="card-body position-relative p-0">
                  <div className="card-title position-absolute p-5 d-flex align-items-center">
                    <div className="title-wrap text-center w-100">
                      {/* <small className="text-white text-uppercase">New Arrivals</small> */}
                      <h2>{data.categories && data.categories.length > 2 ? data.categories[2].cat_title : "Default Category"}</h2>
                      <Link href={`/shop/category/${data.categories[2].slug}`} passHref>
                        <span className="btn btn-primary rounded-0">Explore Collections</span>
                      </Link>
                    </div>
                  </div>
                  <div className="card-img">
                    <img
                      src="/assets/images/m-3.jpg"
                      alt="New Arrivals - Wedding Collections"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Masonary end */}
      <section className="fluid-block img-content-block py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="block-info">
                    <div className="title-div mb-2">
                      <small>latest trends</small>
                      <h2 className="text-uppercase mb-0 fw-bold">{data.categories && data.categories.length > 3 ? data.categories[3].cat_title : "Default Category"}</h2>
                    </div>
                    <p>A beautifully draped saree that combines comfort with elegance, perfect for everyday wear or special occasions. </p>
                    <div className="pt-3 d-flex align-items-center gap-2">
                      <Link href={`/shop/category/${data.categories[3].slug}`} passHref>
                        <span className="btn btn-secondary">Shop Now <i className="bi bi-chevron-right" /></span>
                      </Link>
                      <Link href="/shop" passHref>
                        <span className="btn btn-outline-secondary">View All <i className="bi bi-chevron-right" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <img
                    src="/assets/images/txt-block-img.jpg"
                    alt="Latest trends - Party wears"
                    className="img-fluid"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Image Block */}
      <section className="fluid-block collections category pb-5">
        <div className="container">
          <div className="title-div text-center">
            <h2 className="text-uppercase mb-0 fw-bold">You may also like</h2>
            <small>Explore More Stunning Sarees</small>
          </div>
          <div className="catagory-slider">
            <Slider {...settings}>
              {featured.map((product, index) => (
                <div className="card border-0 rounded-0" key={index}>
                  <div className="wishlist-icon" title="Wishlist" onClick={() => handleWishlistClick(product.id)}>
                    <i className="fa-regular fa-heart" />
                  </div>
                  <Link className={`card-img`} href={`/shop/${product.slug}`} passHref>
                    <img
                      src={`${process.env.NEXT_PUBLIC_HOST_URL}${product.featuredimage}`}
                      alt={product.name}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="card-body p-0 py-4">
                    <div className="info">
                      <Link href={`/shop/${product.slug}`} passHref><h3 className="fs-5">{product.name}</h3></Link>
                      <p>{product.short_desc}</p>
                    </div>
                    <div className="price d-flex align-items-center">
                      <div className="left d-flex align-items-center gap-2">
                        <strong className="fs-4">
                          ₹{getPrice(product.mrp, product.discounted_price, product.product_type)}
                        </strong>
                        <span className="text-decoration-line-through text-muted">
                          ₹{getOtherPrice(product.mrp, product.discounted_price, product.product_type)}
                        </span>
                      </div>
                      <div className="right">
                        <span className={`${product.stock_status == 1 ? "text-success" : "text-danger"}`}>{product.stock_status == 1 ? "In Stock" : "Out of Stock"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </Slider>
          </div>
          <div className="text-center mt-3">
            <Link href="/shop" passHref>
              <span className="btn btn-secondary">View All <i className="bi bi-chevron-right" /></span>
            </Link>
          </div>
        </div>
      </section>
      {/* Top Collections end */}
      <section className="fluid-block video-section d-flex align-items-center wp-block-cover-image has-background-dim banner" style={{ backgroundImage: 'url(/assets/images/parallax-bg.jpg)', backgroundPosition: 'left center' }}>
        <div className="container text-center col-lg-6">
          <h2 className="display-2 text-white">Explore the Fashion</h2>
          <p className="fs-4 text-white">Dive into a world of elegance and tradition with sarees that blend timeless craftsmanship and modern-day sophistication beautifully..</p>
          <div className="btn btn-primary mt-4"><div className="d-flex align-items-center gap-2"><span>Watch Now</span> <i className="fa-solid fa-play" /></div>
          </div>
        </div></section>
      {/* Features End */}
      {/* <section className="fluid-block offer-block">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <a href="#"><img src="/assets/images/offer-1.jpg" className="img-fluid" /></a>
            </div>
            <div className="col-lg-6">
              <a href="#"><img src="/assets/images/offer-2.jpg" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </section> */}
      {/* Offer End */}
      {/* <section className="fluid-block blog">
        <div className="container">
          <div className="title-div d-flex align-items-center justify-content-between">
            <div className="left">
              <h2 className="text-uppercase mb-0 fw-bold">From the journal</h2>
              <small>our latest blog posts</small>
            </div>
            <div className="right">
              <Link href="/blog" passHref>
                <span className="btn btn-outline-secondary">View All <i className="bi bi-chevron-right" /></span>
              </Link>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <Link href="blog.html" passHref>
                <span className="card border-0 rounded-0">
                  <div className="card-img">
                    <img
                      src="/assets/images/b-1.jpg"
                      alt="Blog post 1"
                      className="img-fluid"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="card-body p-0 py-3">
                    <div className="info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <div className="date mt-3 d-flex align-items-center gap-2"><i className="fa-light fa-calendar" /> 12th Mar 2025</div>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <Link href="blog.html" passHref>
                <span className="card border-0 rounded-0">
                  <div className="card-img">
                    <img
                      src="/assets/images/b-2.jpg"
                      alt="Blog post 2"
                      className="img-fluid"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="card-body p-0 py-3">
                    <div className="info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <div className="date mt-3 d-flex align-items-center gap-2"><i className="fa-light fa-calendar" /> 27th Feb 2025</div>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <Link href="blog.html" passHref>
                <span className="card border-0 rounded-0">
                  <div className="card-img">
                    <img
                      src="/assets/images/b-3.jpg"
                      alt="Blog post 3"
                      className="img-fluid"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="card-body p-0 py-3">
                    <div className="info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <div className="date mt-3 d-flex align-items-center gap-2"><i className="fa-light fa-calendar" /> 11th Feb 2025</div>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <Link href="blog.html" passHref>
                <span className="card border-0 rounded-0">
                  <div className="card-img">
                    <img
                      src="/assets/images/b-4.jpg"
                      alt="Blog post 4"
                      className="img-fluid"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="card-body p-0 py-3">
                    <div className="info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <div className="date mt-3 d-flex align-items-center gap-2"><i className="fa-light fa-calendar" /> 7th Jan 2025</div>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog end */}
      <section className="fluid-block features-2 text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 border-end">
              <img
                src="/assets/images/royaldrape.png"
                alt="Free Shipping"
                width={100}
                height={100}
              />
              <h4 className="mt-3">The Royal Drape Collection</h4>
              <small>Crafted for the Queen in You</small>
            </div>
            <div className="col-lg-3 col-lg-3 col-md-3 col-sm-6 col-6 border-end">
              <img
                src="/assets/images/tradition.png"
                alt="Custom tailoring"
                width={100}
                height={100}
              />
              <h4 className="mt-3">Tradition Reimagined</h4>
              <small>New Chapter in Ethnic Elegance</small>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 border-end">
              <img
                src="/assets/images/worldwide1.png"
                alt="Worldwide shipping"
                width={100}
                height={100}
              />
              <h4 className="mt-3">Worldwide shipping</h4>
              <small>Get Delivery all over World</small>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <img
                src="/assets/images/support1.png"
                alt="Online Customer Support"
                width={100}
                height={100}
              />
              <h4 className="mt-3">Online Customer Support</h4>
              <small>09:00 am-9:00 pm Hours Monday-Sunday</small>
            </div>
          </div>
        </div>
      </section>
      {/* Feature 2 end */}
    </>


  )
}