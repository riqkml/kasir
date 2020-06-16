<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3">
    <title>Sidebar template</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">

</head>

<body>

<div class="page-wrapper chiller-theme toggled">
 
<nav id="sidebar" class="sidebar-wrapper sidenav">
    <div class="sidebar-content">
      
      <div class="sidebar-header">
        <div class="user-pic">
        <img src="img/user.png" class="rounded-circle" alt="Cinque Terre"> 
        </div>
        <div class="user-info">
          <span class="user-name">Jhon
            <strong>Smith</strong>
          </span>
          <span class="user-role">Administrator</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
      <!-- sidebar-header  -->
      <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Search...">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar-search  -->
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar">
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
          </li>
          <li class="sidebar">
            <a href="akun.php">
              <i class="fa fa-users"></i>
              <span>Akun</span>
              <span class="badge badge-pill badge-success">New</span>
            </a>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>Menu</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="menu-makanan.php">Makanan Kucing</a>
                </li>
                <li>
                  <a href="menu-obat.php">Obat Kucing</a>
                </li>
                <li>
                  <a href="menu-aksesoris.php">Aksesoris Kucing</a>
                </li>
                <li>
                  <a href="menu-foodplate.php">Food Plate Kucing</a>
                </li>
                <li>
                  <a href="menu-litter.php">Acc Liter Box Kucing</a>
                </li>
                <li>
                  <a href="menu-cage.php">Cage Kucing</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-gem"></i>
              <span>Layanan</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="layanan-smoothing.php">Smoothing Kucing</a>
                </li>
                <li>
                  <a href="layanan-penitipan.php">Penitipan Kucing</a>
                </li>
                <li>
                  <a href="layanan-vaksin.php">Vaksin Kucing</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-chart-line"></i>
              <span>Laporan</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Laporan Transaksi</a>
                </li>
                <li>
                  <a href="#">Laporan Menu Penjualan</a>
                </li>
                <li>
                  <a href="#">Laporan Keuntungan</a>
                </li>
                <li>
                  <a href="#">Laporan Stok Barang</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-cogs"></i>
              <span>Pengaturan</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="profil.php">Edit Profil</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </li>
         
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <div class="sidebar-footer">
    <small>Optimized by Amrel</small>
    </div>
    <!-- sidebar-content  -->
  </nav>
  <!-- sidebar-wrapper  -->
  <main class="page-content">
    <div class="container container-bottom">
        <div class="row">
            <div class="col-10">
                <h2>Teebee Petshop</h2>
                <small><i>Menu/Makanan Kucing</i></small>
            </div>   
            <div class="col-2">
                
            </div> 
        </div>
    </div>

    <div class="container" style="padding-bottom: 3%;">
      <div style="float: right;">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDaftarAkun">
              <i class="fa fa-plus"></i>
              <span>Tambah Akun</span>
          </button> 
      </div>
    </div>

    <div class="container">
      <div class="wrapper-table">
        <table id="table_id" class="display">
        <thead>
            <tr>
                <th>ID Menu</th>
                <th>Nama Menu</th>
                <th>Stok</th>
                <th>Harga</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>TB0053</td>
                <td>Bolt Tuna 20kg</td>
                <td>35</td>
                <td>0</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-trash"></i>
                    <span>Delete</span>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-edit"></i>
                    <span>Update</span>
                  </button>
                </td>
            </tr>
            <tr>
                <td>TB0054</td>
                <td>Whiskas Adult Chicken&Tuna 24x</td>
                <td>32</td>
                <td>0</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-trash"></i>
                    <span>Delete</span>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-edit"></i>
                    <span>Update</span>
                  </button>
                </td>
            </tr>
            <tr>
                <td>TB0055</td>
                <td>Whiskas Adult Mac-Sal 24x85gr</td>
                <td>25</td>
                <td>0</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-trash"></i>
                    <span>Delete</span>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-edit"></i>
                    <span>Update</span>
                  </button>
                </td>
            </tr>
            <tr>
                <td>TB0056</td>
                <td>Whiskas Adult Mackerel 24x85gr</td>
                <td>15</td>
                <td>0</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-trash"></i>
                    <span>Delete</span>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDaftarAkun">
                    <i class="fa fa-edit"></i>
                    <span>Update</span>
                  </button>
                </td>
            </tr>
        </tbody>
        </table>
      </div>

    </div>
  </main>
  <!-- page-content" -->
</div>
<!-- page-wrapper -->

<!-- Modal -->

<!-- Modal -->
<div class="modal fade" id="modalDaftarAkun" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah akun baru</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <!-- FORM -->
          <form>
          <div class="form-group">
            <label for="">ID Jenis</label>
            <input type="text" class="form-control" id="" value="JNS001" disabled="true" >
          </div>
          <div class="form-group">
            <label for="">ID Menu</label>
            <input type="text" class="form-control" id="" value="TB0090" disabled="true" >
          </div>
          <div class="form-group">
            <label for="">Nama Menu</label>
            <input type="text" class="form-control" id="" placeholder="Masukkan Nama Menu">
          </div>
          <div class="form-group">
            <label for="">Deskripsi</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Masukkan Deskripsi"></textarea>
          </div>
          <div class="form-row">
            <div class="col">
              <label for="">Harga</label>
              <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Masukkan Harga">
            </div>
            <div class="col">
              <label for="">Stok</label>
              <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Masukkan Stok">
            </div>
          </div>
          <div class="form-group">
            <label for="">Gambar</label>
            <input type="file" class="form-control" id="" placeholder="Masukkan Nama Menu">
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
        </form>
        <!-- FORM -->
      </div>
    </div>
  </div>
</div>

<!-- End Modal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script>
    jQuery(function ($) {

$(".sidebar-dropdown > a").click(function() {
$(".sidebar-submenu").slideUp(200);
if (
$(this)
  .parent()
  .hasClass("active")
) {
$(".sidebar-dropdown").removeClass("active");
$(this)
  .parent()
  .removeClass("active");
} else {
$(".sidebar-dropdown").removeClass("active");
$(this)
  .next(".sidebar-submenu")
  .slideDown(200);
$(this)
  .parent()
  .addClass("active");
}
});

$("#close-sidebar").click(function() {
$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
$(".page-wrapper").addClass("toggled");
});




});

$(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>
</body>

</html>