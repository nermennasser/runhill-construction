document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".gallery-filters ul li a");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // 1. إزالة الكلاس active من كل الأزرار وإضافته للزر المضغط حالياً
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // 2. تصفية الصور (Filtering)
      const targetFilter = this.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (targetFilter === "all" || item.classList.contains(targetFilter)) {
          item.classList.remove("hide"); // إزالة الإخفاء لتظهر الصورة بنعومة
        } else {
          item.classList.add("hide"); // إضافة كلاس الإخفاء لتنكمش وتختفي
        }
      });
    });
  });
});
