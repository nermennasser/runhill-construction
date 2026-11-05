function changeLanguage(lang) {
  const htmlTag = document.getElementById("html-tag");

  if (lang === "ar") {
    htmlTag.setAttribute("lang", "ar");
    htmlTag.setAttribute("dir", "rtl");
  } else {
    htmlTag.setAttribute("lang", "en");
    htmlTag.setAttribute("dir", "ltr");
  }

  // جلب جميع العناصر التي تحتوي على خاصية الترجمة وتغيير نصها
  const elements = document.querySelectorAll("[data-ar]");
  elements.forEach((element) => {
    if (lang === "en") {
      const enText = element.getAttribute("data-en");
      if (enText) element.innerText = enText;
    } else {
      const arText = element.getAttribute("data-ar");
      if (arText) element.innerText = arText;
    }
  });

  // تحديث الـ Placeholders (استدعاء الدالة هنا)
  updatePlaceholders(lang);

  // حفظ اللغة المختارة في المتصفح لكي تظل محفوظة عند التنقل بين الصفحات
  localStorage.setItem("selectedLang", lang);
}

// دالة تحديث الـ Placeholders (مفصولة لتكون منظمة)
function updatePlaceholders(lang) {
  document.querySelectorAll("[data-ar-placeholder]").forEach((input) => {
    if (lang === "ar") {
      input.placeholder = input.getAttribute("data-ar-placeholder");
    } else {
      input.placeholder = input.getAttribute("data-en-placeholder");
    }
  });
}

// استعادة اللغة المحفوظة عند فتح الموقع
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  changeLanguage(savedLang);
});
