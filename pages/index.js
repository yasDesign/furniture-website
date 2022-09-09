import React from 'react'

import imgLoaging from '../public/images/loading.gif'
import imgLogo from '../public/images/logo.png'
import imgAbout from '../public/images/about.png'

import imgServices1 from '../public/images/service1.png'
import imgServices2 from '../public/images/service2.png'
import imgServices3 from '../public/images/service3.png'
import imgServices4 from '../public/images/service4.png'

import imgGallery1 from '../public/images/gallery1.jpg'
import imgGallery2 from '../public/images/gallery2.jpg'
import imgGallery3 from '../public/images/gallery3.jpg'
import imgGallery4 from '../public/images/gallery4.jpg'
import imgGallery5 from '../public/images/gallery5.jpg'
import imgGallery6 from '../public/images/gallery6.jpg'

import imgDesi from '../public/images/desi.jpg'
import imgBlog1 from '../public/images/blog1.jpg'

import imgTett1 from '../public/images/tett1.png'
import imgTett2 from '../public/images/tett2.png'
import Image from 'next/image'
import Head from 'next/head'




const HomePage = () => {
  return (
    <>
    <Head>
    <title>Furniture Website</title>

    </Head>

    <main className='main-layout'>
 
      <div className="loader_bg">
         <div className="loader"><Image src={imgLoaging} alt="#"/></div>
      </div>
 
      <header>
         
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="index.html"><Image src={imgLogo} alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-10 offset-md-1">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <a className="nav-link" href="index.html">Home</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="about.html">About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="service.html">Services</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="gallery.html">Gallery</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="testimonial.html"> Testimonial </a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="contact.html">Contact Us</a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>

      <section className="banner_main">
         <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row">
                           <div className="col-md-7 offset-md-5">
                              <div className="text-bg">
                                 <h1> Design <br/>Of Furniture</h1>
                                 <span>There are many variations of passages of Lorem Ipsum available</span>
                                 <a className="read_more" href="#">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row">
                           <div className="col-md-7 offset-md-5">
                              <div className="text-bg">
                                 <h1> Design <br/>Of Furniture</h1>
                                 <span>There are many variations of passages of Lorem Ipsum available</span>
                                 <a className="read_more" href="#">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row">
                           <div className="col-md-7 offset-md-5">
                              <div className="text-bg">
                                 <h1> Design <br/>Of Furniture</h1>
                                 <span>There are many variations of passages of Lorem Ipsum available</span>
                                 <a className="read_more" href="#">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </section>

      <div id="about" className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-5">
                  <div className="titlepage">
                     <h2>About <span className="green">Us</span></h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                     <a className="read_more" href="#"> Read More</a>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><Image src={imgAbout} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div id="service" className="service">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our <span className="green">Services</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="row">
                     <div className="col-md-4 col-sm-6">
                        <div className="service_box">
                           <i><Image src={imgServices1} alt="#"/></i>
                           <h3>Retina Ready</h3>
                           <p>many variations of passages <br/>of Lorem Ipsum available,</p>
                        </div>
                     </div>
                     <div className="col-md-4 offset-md-1 col-sm-6">
                        <div className="service_box">
                           <i><Image src={imgServices2} alt="#"/></i>
                           <h3>Creative Elements</h3>
                           <p>many variations of passages <br/>of Lorem Ipsum available,</p>
                        </div>
                     </div>
                     <div className="col-md-4 offset-md-3 col-sm-6 mar_top">
                        <div className="service_box">
                           <i><Image src={imgServices3} alt="#"/></i>
                           <h3>Easy-to-Use</h3>
                           <p>many variations of passages <br/>of Lorem Ipsum available,</p>
                        </div>
                     </div>
                     <div className="col-md-4 offset-md-1 col-sm-6 mar_top">
                        <div className="service_box">
                           <i><Image src={imgServices4} alt="#"/></i>
                           <h3>Easy Import</h3>
                           <p>many variations of passages <br/>of Lorem Ipsum available,</p>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <a className="read_more" href="#"> Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div id="gallery"  className="gallery">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our <span className="green">gallery</span></h2>
                     <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffer</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_text">
                     <div className="galleryh3">
                        <h3>Interior Design</h3>
                        <p>of passages of Lorem <br/>
                           Ipsum available <br/>
                           , but the majority <br/>
                           have suffer
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery1} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery2} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery3} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery4} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_text">
                     <div className="galleryh3">
                        <h3>Interior Design</h3>
                        <p>of passages of Lorem <br/>
                           Ipsum available <br/>
                           , but the majority <br/>
                           have suffer
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_text">
                     <div className="galleryh3">
                        <h3>Interior Design</h3>
                        <p>of passages of Lorem <br/>
                           Ipsum available <br/>
                           , but the majority <br/>
                           have suffer
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery5} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><Image src={imgGallery6} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="design">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div id="design" className="carousel slide banner_design" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#design" data-slide-to="0" className="active"></li>
                        <li data-target="#design" data-slide-to="1"></li>
                        <li data-target="#design" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="text_de">
                                          <div className="titlepage">
                                             <h2>New Ideas <span className="green">Design</span></h2>
                                          </div>
                                          <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="text_de">
                                          <div className="titlepage">
                                             <h2>New Ideas <span className="green">Design</span></h2>
                                          </div>
                                          <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="text_de">
                                          <div className="titlepage">
                                             <h2>New Ideas <span className="green">Design</span></h2>
                                          </div>
                                          <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#design" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#design" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div>
               <div className="col-md-7 pad_roght0">
                  <div className="design_img">
                     <figure><Image src={imgDesi} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div  className="latest_news">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Read Our <span className="green">Latest News</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 offset-md-2">
                  <div id="new" className="news_box">
                     <div className="news_img">
                        <figure><Image src={imgBlog1} alt="#"/></figure>
                     </div>
                     <div className="news_room">
                        <span>Post By :limelight</span>
                        <ul>
                           <li><a href="#">Like <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                           <li><a href="#">Comment <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                           <li><a href="#">Share <i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
                        </ul>
                        <h3>Interior Design</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content  </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 ">
                  <div id="new" className="news_box">
                     <div className="news_img mr_le">
                        <figure><Image src={imgBlog1} alt="#"/></figure>
                     </div>
                     <div className="news_room">
                        <span>Post By :limelight</span>
                        <ul>
                           <li><a href="#">Like <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                           <li><a href="#">Comment <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                           <li><a href="#">Share <i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
                        </ul>
                        <h3>Artictecture</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content  </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read_more" href="#"> Read More</a>
               </div>
            </div>
         </div>
      </div>

      <div id="testimonial" className="Testimonial">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-8 pad_left0">
                  <div id="testimon" className="carousel slide banner_testimonial" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#testimon" data-slide-to="0" className="active"></li>
                        <li data-target="#testimon" data-slide-to="1"></li>
                        <li data-target="#testimon" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett1} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett2} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett1} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett2} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett1} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="text_humai">
                                          <i><Image src={imgTett2} alt="#"/></i>
                                          <span>HumouThere</span>
                                          <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#testimon" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#testimon" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div>
               <div className="col-md-4 ">
                  <div className="titlepage">
                     <h2>Testimonial</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type"></textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-6">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="345" frameBorder="0" style={{border:"0",width: "100%"}} allowFullScreen=""></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className=" col-md-3 col-sm-6">
                     <ul className="social_icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                     <p className="variat pad_roght2">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by 
                     </p>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                     <h3>LET US HELP YOU </h3>
                     <p  className="variat pad_roght2">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by 
                     </p>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <h3>INFORMATION</h3>
                     <ul className="link_menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html"> About</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="testimonial.html">Testimonial</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <h3>OUR Design</h3>
                     <p  className="variat">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by 
                     </p>
                  </div>
                  <div className="col-md-6 offset-md-6">
                     <form id="hkh" className="bottom_form">
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button className="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

    </main>
    </>
  )
}

export default HomePage