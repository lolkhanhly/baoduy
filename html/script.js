document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
  
    let cartItems = [];
  
    function renderCart() {
      cartList.innerHTML = '';
      let total = 0;
  
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} đ`;
        cartList.appendChild(li);
        total += item.price;
      });
  
      totalPrice.textContent = total + ' đ';
    }
  
    function addToCart(name, price) {
      cartItems.push({ name, price });
      renderCart();
    }
  
    function clearCart() {
      cartItems = [];
      renderCart();
    }
  
    checkoutBtn.addEventListener('click', function() {
      // Xử lý thanh toán, ví dụ: chuyển hướng đến trang thanh toán
      alert('Chuyển hướng đến trang thanh toán...');
    });
  
    // Thêm sản phẩm vào giỏ hàng (ví dụ)
    addToCart('Mũ phớt nam', 165000);
    addToCart('Mũ lưỡi trai', 144000);
  });
  


  /*------------------------phần số lượng */
  function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }

  function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }


 /*đếm-------------------------------------------------------------------- ngược */
  
// Lấy thời gian hiện tại
var currentDate = new Date();

// Thêm 10 ngày vào thời gian hiện tại
currentDate.setDate(currentDate.getDate() + 10);

// Thời gian đích đến mới (trong milliseconds)
var targetDate = currentDate.getTime();

// Cập nhật thời gian đếm ngược mỗi giây
var countdownInterval = setInterval(function() {
  // Lấy thời gian hiện tại
  var now = new Date().getTime();
  
  // Tính toán khoảng cách thời gian từ hiện tại đến thời gian đích đến
  var distance = targetDate - now;
  
  // Tính toán các giá trị cho giờ, phút, giây
  var days = Math.floor(distance / (500 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (500 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Hiển thị kết quả trong thẻ HTML có id là "countdown"
  document.getElementById('countdown').innerHTML = days + ' ngày ' + hours + ' giờ '
  + minutes + ' phút ' + seconds + ' giây';
  
  // Nếu thời gian đích đến đã qua, dừng đếm ngược
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Đếm ngược kết thúc';
  }
}, 1000);

  