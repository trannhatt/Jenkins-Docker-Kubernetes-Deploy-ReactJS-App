// import './animate.scss';
// import './bootsnav.scss';
// import './bootstrap.min.scss';
// import './flaticon.scss';
// import './font-awesome.min.scss';
// import './owl.carousel.min.scss';
// import './responsive.scss';
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootsnav.css'

import './assets/css/style.css'

import './home.scss';
import './assets/css/responsive.css'


function Home() {
	const Redirect = () => {
		window.location = "http://localhost:3000/login";
	}
	return <div>
		<div id="main" className="top-area">
			<div className="header-area">
				<nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

					<div className="container">

						<div className="navbar-header w-100">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
								<i className="fa fa-bars"></i>
							</button>
						</div>

						<div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
							<img className="navbar-brand" src={require("~/image/logo_nobore.png")} alt="logo_nobore" />
							<ul className="nav navbar-nav navbar-right nav-horizon" data-in="fadeInDown" data-out="fadeOutUp">
								<li className=" smooth-menu active"></li>
								<li className=" smooth-menu"><a href="#main">TRANG CHỦ</a></li>
								<li className="smooth-menu"><a href="#about">GIỚI THIỆU</a></li>
								<li className="smooth-menu"><a href="#portfolio">ƯU ĐÃI</a></li>
								<li className="smooth-menu"><a href="#menu">THỰC ĐƠN</a></li>
								<li className="smooth-menu"><a href="#order">ĐẶT BÀN </a></li>
								<li className="smooth-menu"><a href="#feedback">PHẢN HỒI</a></li>
								<li className="smooth-menu"><a href="#contact">LIÊN HỆ</a></li>
							</ul>
						</div>
					</div>
				</nav>

			</div>

			<div className="clearfix"></div>

		</div>

		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>NOBORE</h2>
							<p>Thức ăn ngon cho người Việt</p>
							<div className="order-about">
								<button className="order-about-btn" onClick={Redirect}>ĐẶT MÓN NGAY</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

		<section id="about" className="about">
			<div className="section-heading text-center">
				<h2>VỀ NOBORE</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
									Nhắc đến thể thao thì có lẽ môn thể thao được nhiều người ưa thích nhất và nổi tiếng nhất trên thế giới không đâu khác mà chính là bóng đá. Bóng đá chính là môn thể thao vua và hấp dẫn hơn khi xuất hiện các cầu thủ vĩ đại.
								</h3>
								<p>
									Cristiano Ronaldo dos Santos Aveiro là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha thi đấu ở vị trí tiền đạo, anh là đội trưởng của đội tuyển bóng đá quốc gia Bồ Đào Nha. <br />
									Sinh ra và lớn lên ở miền trung Argentina, Messi chuyển đến Tây Ban Nha và gia nhập Barcelona ở tuổi 13, anh đã có trận ra mắt đội một câu lạc bộ ở tuổi 17 vào ngày 16 tháng 10 năm 2004
								</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>Số điện thoại</h3>
											<p>0123456789</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>mebongda@gmail.com</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>website</h3>
											<p>www.mebongda.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src={require("~/image/slide_about.jpg")} alt="profile_image" />
								<div className="about-list-icon">
									<ul>
										<li>
											<a href="#">
												<i className="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-dribbble" aria-hidden="true"></i>
											</a>

										</li>
										<li>
											<a href="#">
												<i className="fa fa-twitter" aria-hidden="true"></i>
											</a>

										</li>
										<li>
											<a href="#">
												<i className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>


									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="portfolio" className="portfolio">
			<div className="portfolio-details">
				<div className="section-heading text-center">
					<h2>GIỜ VÀNG GIẢM GIÁ</h2>
				</div>
				<div className="container">
					<div className="portfolio-content">
						<div className="isotope">
							<div className="row">

								<div className="col-sm-4">
									<div className="item">
										<img src={require("~/image/discount2.jpg")} alt="portfolio image" />
										<div className="isotope-overlay">
											<a href="#">
												Discount1
											</a>
										</div>
									</div>
									<div className="item">
										<img src={require("~/image/discount2.jpg")} alt="portfolio image" />
										<div className="isotope-overlay">
											<a href="#">
												Discount1
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src={require("~/image/discount1.jpg")} alt="portfolio image" id='img1' />
										<div className="isotope-overlay">
											<a href="#">
												Discount2
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src={require("~/image/discount2.jpg")} alt="portfolio image" />
										<div className="isotope-overlay">
											<a href="#">
												Discount1
											</a>
										</div>
									</div>
									<div className="item">
										<img src={require("~/image/discount2.jpg")} alt="portfolio image" />
										<div className="isotope-overlay">
											<a href="#">
												Discount1
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

		<section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>LIÊN HỆ VỚI TÔI NẾU CHÚNG TA CHUNG ĐAM MÊ</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-form">
									<form>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input type="text" className="form-control" id="subject" placeholder="Phone number" name="Phone number" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<a className="contact-btn" href="#" role="button">submit</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-adress">
									<div className="contact-add-head">
										<h3>Lưu Vũ Hà</h3>
										<p>Mê bóng đá</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p>0123456789</p>
										</div>
										<div className="single-contact-add-info">
											<h3>email</h3>
											<p>mebongda@gmail.com</p>
										</div>
										<div className="single-contact-add-info">
											<h3>website</h3>
											<p>www.mebongda.com</p>
										</div>
									</div>
								</div>
								<div className="hm-foot-icon">
									<ul>
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i className="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<footer id="footer-copyright" className="footer-copyright">
			<div id="scroll-Top">
				<a className="return-to-top" href="#main">
					<i className="fa fa-angle-up " id="scroll-top" ></i>
				</a>

			</div>

		</footer>
	</div>
}

export default Home;
