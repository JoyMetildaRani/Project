import '../style.css'
import '../all.min.css'
import '../bootstrap.min.css'
import '../slick-carousel/slick/slick.css'
import '../slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 4,
  initialSlide: 0,
  
 
}
function Places() {
return(
  
<div>
<div className="display-progress" />
{/* Scroll Progressbar Section Ends */}
{/* Mobile Header Section Starts */}
<div className="container-fluid bg-header-mobile" id="index">
  <div className="row d-flex align-items-center">
    <div className="col-4">
      <div className="header-logo-mobile">
        <a href="story-universe.html">
          <img src="images/logo.png" className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-5 px-0">
      <ul className="places-characters-listing d-flex justify-content-center">
        <li className="active"><a href="places.html">Places</a></li>
        <li><a href="characters.html">Characters</a></li>
      </ul>
    </div>
    <div className="col-3">
      <div className="burger-menu">
        <span />
      </div>
    </div>
  </div>
</div>
{/* Mobile Header Section Ends */}
{/* Mobile Sidebar Section Starts */}
<header className="fixed-sidebar flex-column justify-content-between">
  <div className="sidebar-logo">
    <a href="story-universe.html">
      <img src="images/logo.png" className="img-fluid" alt="" />
    </a>
  </div>
  <div className="sidebar-menu">
    <ul className="menu-listing">
      <li><a href="story-universe.html">Story Universe</a></li>
      <li className="active"><a href="places.html">Places</a></li>
      <li><a href="characters.html">Characters</a></li>
      <li><a href="blog.html">Nitin's Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
  <div className="sidebar-social">
    <ul className="sidebar-social-listing d-flex flex-row">
      <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
    </ul>
  </div>
</header>
{/* Mobile Sidebar Section Ends */}
{/* Desktop Header Section Starts */}
<div className="container-fluid bg-header-desktop" id="index">
  <div className="row d-flex align-items-center">
    <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
      <div className="header-logo-desktop">
        <a href="story-universe.html">
          <img src={require('../images/logo.png')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
      <ul className="menu-listing d-flex align-items-center justify-content-center">
        <li><a href="story-universe.html">Story Universe</a></li>
        <li className="active"><a href="places.html">Places</a></li>
        <li><a href="characters.html">Characters</a></li>
        <li><a href="blog.html">Nitin's Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
      <ul className="header-social-listing d-flex align-items-center justify-content-end">
        <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
        <li><a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
      </ul>
    </div>
  </div>
</div>
{/* Desktop Header Section Ends */}
{/* Places Section Starts */}
<div className="container-fluid bg-places-pp">
  <div className="row align-items-center">
    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
      <div className="places-info-pp">
        <p>Explore the Places Where the Stories happened</p>
      </div>
    </div>
    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <form>
        <div className="input-group">
          <input type="text" className="form-control form-control-kathaastu form-control-dark-kathaastu" placeholder="Search Places" />
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
      </form>
    </div>
  </div>
  <div className="row row-box-places-images-pp">
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/14.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/15.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/16.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/17.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/18.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/19.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/14.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href="places-single.html">
          <img src={require('../images/15.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
  </div>
</div>
{/* Places Section Ends */}
{/* Read Stories Section Starts */}
<div className="container-fluid bg-read-stories-pp" >
  <div className="row">
    <div className="col-12">
      <section className="section-heading section-stories-heading-home">
        <h2>Read Stories Set in Pune</h2>
      </section>
    </div>
  </div>
  <div className="row" >
    <div className="col-12">
      <div className="slick-slider-read-stories-pp" >
    <Slider {...settings}>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/1.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home"  >
            <a href><img src={require('../images/2.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/3.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/4.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/5.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/6.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/7.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/1.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/2.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/3.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/4.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/5.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/6.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/7.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  </div>
</div>
{/* Read Stories Section Ends */}
{/* Explore Stories Section Starts */}
<div className="container-fluid bg-explore-stories-pp">
  <div className="row">
    <div className="col-12">
      <section className="section-heading section-stories-heading-home">
        <h2>Explore the Stories of Kolkata</h2>
      </section>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="slick-slider-explore-stories-pp">
        <Slider {...settings}>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/1.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/2.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/3.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/4.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/5.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/6.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/7.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/1.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/2.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/3.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/4.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/5.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/6.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        <div>
          <div className="kathaastu-stories-img-home">
            <a href><img src={require('../images/7.jpg')} className="img-fluid" alt="" /></a>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  </div>
</div>
{/* Explore Stories Section Ends */}
{/* Extra Places Section Starts */}
<div className="container-fluid bg-extra-places-pp">
  <div className="row row-box-extra-places-images-pp">
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/14.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/15.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/16.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/17.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/18.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/19.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/14.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
      <div className="box-places-images-pp">
        <a href>
          <img src={require('../images/15.jpg')} className="img-fluid" alt="" />
        </a>
      </div>
    </div>
  </div>
</div>
{/* Extra Places Section Ends */}
{/* Footer Section Starts */}
<div className="container-fluid bg-footer">
  <div className="row d-flex align-items-end">
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
      <ul className="footer-listing">
        <li><a href="story-universe.html">Story Universe</a></li>
        <li className="active"><a href="places.html">Places</a></li>
        <li><a href="characters.html">Characters</a></li>
        <li><a href="blog.html">Nitin's Blog</a></li>
      </ul>
    </div>
    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
      <ul className="footer-listing">
        <li><a href="advertise.html">Advertise with us</a></li>
        <li><a href="submissions.html">Write For Us</a></li>
        <li><a href="faq.html">FAQ's</a></li>
        <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
      </ul>
    </div>
    <div className="col-sm-12 col-md-3 col-lg-5 col-xl-5 col-xxl-5">
      <ul className="footer-social-listing">
        <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
        <li><a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
      </ul>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="copyright-info text-center">
        <p>© 2022 <span>Kathaastu.</span> All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Places;