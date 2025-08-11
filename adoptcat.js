function adoptCat(button) {
  // نقرأ اسم القطة من الزر
  const catName = button.getAttribute('data-catname');

  // رسالة شكر مخصصة حسب الاسم
  let message = "";
  if (catName === "soso") {
    message = `تم تبني"${catName}" يمكنك التصفح وإختيار قطط اخرى💜🤗 `;
  } 
  else if(catName==="fofo"){
    message = `تم تبني"${catName}" يمكنك التصفح وإختيار قطط اخرى💜🤗 `;
  }
    else if(catName==="كاتي"){
    message = `تم تبني"${catName}" يمكنك التصفح وإختيار قطط اخرى💜🤗 `;
  }
  else {
    message = `شكراً لك! تم إرسال طلب تبني القطة "${catName}" بنجاح 🐾 سيُفتح نموذج نأمل منك تعبئته. لأي استفسار: 0926910314`;
  }

  alert(message);

  // 🟢 هنا نحدد رابط كل قطة حسب الاسم
  const formLinks = {
    "كاتي":"#",
    "soso": "#",
    "fofo": "#"
    // أضف المزيد هنا إذا عندك قطط إضافية
    // مثال: "لولي": "#"
  };

  // نختار الرابط حسب الاسم، وإذا ما وُجد نستخدم رابط افتراضي
  const formURL = formLinks[catName] || "https://docs.google.com/forms/d/e/1FAIpQLSfMbxdqROZ7DjciGTTlvNsM9T9UQl8yBJ1-jv15sxyKPSbs5g/viewform";

  // نفتح الرابط
  window.open(formURL, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form[action="https://formspree.io/f/mldlnzky"]');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          // هنا ضع رابط صفحة الشكر
          window.location.href = "https://form.jotform.com/252195841744059";
        } else {
          alert('حدث خطأ، حاول مرة أخرى.');
        }
      }).catch(error => {
        alert('تعذر الإرسال، تحقق من الاتصال.');
      });
    });
  }
});

