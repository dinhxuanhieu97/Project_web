<?php
require_once './config/database.php';
spl_autoload_register(function ($className) {
    require_once "./app/models/$className.php";
});

$productModel = new ProductModel();
$productList = $productModel->getAllProducts();
$categoryModel = new CategoryModel();
$categoryList = $categoryModel->getAllCategories();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Tẻn | Triển khai hệ thống phần mềm</title>
  <link href="http://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/backdoor.css">
  <link rel="stylesheet" href="./public/css/main.css">
</head>

<body>
  <header class="header success-hd no-bn">
    <div class="header-wrap">
      <div class="header-content">
        <div class="container">
          <div class="header-content-wrap">
            <div class="header-content-lf">
              <div class="header-mobi btn-mobi">
                <span class="line"> </span>
                <span class="line"> </span>
                <span class="line"> </span>
              </div>
              <a class="header-logo" href="index.php">
                <span class="header-logo-img-1">
                  <img src="./assets/images/logo-1.png" alt />
                </span>
                <span class="header-logo-img-2">
                  <img src="./assets/images/logo-1.png" alt />
                </span>
              </a>
              <div class="header-nav">
                <ul class="menu-list">
                  <li class="menu-item dropdown current-menu-item">
                    <a class="menu-link" href>sản phẩm</a>
                    <div class="mega-menu">
                      <div class="container">
                        <div class="mega-menu-wrap">
                          <div class="mega-menu-list">
                            <div class="mega-menu-item">
                              <div class="mega-menu-item-des">
                                <p class="title-mn fw-7 fl-sec t-up">
                                  NÓN BẢO HIỂM 1/2
                                </p>
                                <a class="title-link" href>Xem thêm... </a>
                              </div>
                              <div class="mega-menu-item-list d-wrap">
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="mega-menu-item">
                              <div class="mega-menu-item-des">
                                <p class="title-mn fw-7 fl-sec t-up">
                                  NÓN BẢO HIỂM 3/4
                                </p>
                                <a class="title-link" href>Xem thêm... </a>
                              </div>
                              <div class="mega-menu-item-list d-wrap">
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="mega-menu-item">
                              <div class="mega-menu-item-des">
                                <p class="title-mn fw-7 fl-sec t-up">
                                  NÓN BẢO HIỂM FULLFACE
                                </p>
                                <a class="title-link" href>Xem thêm... </a>
                              </div>
                              <div class="mega-menu-item-list d-wrap">
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                                <div class="mega-menu-item-item d-item">
                                  <a class="mega-menu-rt-link" href="#">
                                    <span class="mega-menu-rt-img">
                                      <img src="./assets/images/mn1.png" alt />
                                    </span>
                                    <span class="mega-menu-rt-info">
                                      <span class="note-mn t-up cl-text">Nón bảo hiểm thể thao</span>
                                      <span class="note-text fw-7 cl-text">Falcon F05</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item dropdown">
                    <a class="menu-link" href>Giới thiệu</a>
                    <ul class="menu-list">
                      <li class="menu-item">
                        <a class="menu-link" href>item 1</a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href>item 2</a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href>item 3</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item dropdown">
                    <a class="menu-link" href>Trợ giúp</a>
                    <ul class="menu-list">
                      <li class="menu-item">
                        <a class="menu-link" href>item 1</a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href>item 2</a>
                      </li>
                      <li class="menu-item">
                        <a class="menu-link" href>item 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-content-rt">
              <div class="header-box">
                <div class="header-box-item btn-search">
                  <div class="header-ic search">
                    <img src="./assets/images/search.svg" alt />
                  </div>
                </div>
                <!-- user -->
                <div class="header-box-item ">
                  <?php if (isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true) { 
										$user_id = $_SESSION['user_id'];
										$user_name = $_SESSION['user_name'];
										$user_avatar = !empty($_SESSION['user_avatar']) ? $_SESSION['user_avatar'] : './assets/images/user.svg';
									?>
                  <div class="header-ic-img">
                    <a href="user_profile.php">
                      <img src="<?php echo $user_avatar; ?>" alt="User Avatar">
                    </a>
                  </div>
                  <div class="header-user">
                    <ul class="header-user-list login">
                      <li class="header-user-item">
                        <a class="header-user-link" href="user_profile.php">
                          Thông tin tài khoản
                        </a>
                      </li>
                      <li class="header-user-item">
                        <a class="header-user-link" href="logout.php">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                  <?php } else { ?>
                  <div class="header-ic">
                    <a href="login.php">
                      <img src="./assets/images/user.svg" alt="Default Avatar">
                    </a>
                  </div>
                  <?php } ?>
                </div>


                <div class="header-box-item cart btn-cart">
                  <div class="header-ic">
                    <span class="sl">0</span>
                    <img src="./assets/images/shopping.svg" alt />
                  </div>
                  <div class="header-cart">
                    <ul class="header-cart-list">
                      <li class="header-cart-item">
                        <a class="header-cart-item-link" href>
                          <div class="header-cart-item-lf">
                            <p class="note-sm fw-5">350.000VND</p>
                          </div>
                          <div class="header-cart-item-rt">
                            <div class="header-cart-item-info">
                              <p class="note-mn">Nón bảo hiểm thể thao</p>
                              <p class="note-text fw-7">Falcon F05</p>
                            </div>
                            <div class="header-cart-item-img">
                              <img src="./assets/images/mnc1.png" alt />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="header-cart-item">
                        <a class="header-cart-item-link" href>
                          <div class="header-cart-item-lf">
                            <p class="note-sm fw-5">380.000VND</p>
                          </div>
                          <div class="header-cart-item-rt">
                            <div class="header-cart-item-info">
                              <p class="note-mn">Nón bảo hiểm 1/2</p>
                              <p class="note-text fw-7">Falcon City</p>
                            </div>
                            <div class="header-cart-item-img">
                              <img src="./assets/images/mnc1.png" alt />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div class="header-cart-total">
                      <div class="header-cart-total-box">
                        <p class="note-sm cl-pri fw-7 t-up">730.000VND</p>
                        <p class="note-sm cl-pri fw-7 t-up">TỔNG CỘNG</p>
                      </div>
                      <a class="note-mn cl-text t-center" href>Thanh toán </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="wrapper">
    <div class="container_card product-container">
      <?php foreach ($productList as $item) { ?>
      <div class="card">
        <img src="./public/images/<?php echo $item['image']; ?>" alt="" class="img-fluid product-photo"
          data-product-id="<?php echo $item['id']; ?>" data-bs-toggle="modal" data-bs-target="#productModal">
        <!-- <div class="card_info">
					<h3><?php //echo $item['name']; ?></h3>
				</div> -->
        <button class="btn badge text-bg-danger btn-like" value="<?php echo $item['id']; ?>">
          <i class="bi bi-heart-fill"></i> <?php echo $item['likes']; ?>
        </button>
        <span class="badge text-bg-warning" id="view-<?php echo $item['id']; ?>">
          <i class="bi bi-eye-fill"></i> <?php echo $item['views']; ?>
        </span>

      </div>
      <?php } ?>
    </div>
    <button class="btn btn-primary btn-loadmore" style="display: none;">Load more</button>
  </div>
  <div class="background"></div>
  <div class="bg"></div>

  <div class="star-field">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="productModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js"></script>
  <script src="public/js/app.js"></script>
  <script src="./public/js/main.js"></script>
</body>


</html>