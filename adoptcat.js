
  function adoptCat(button) {
    alert("  شكرا لك! إرسال طلب التبني بنجاح 🐾 سيظهر لك نموذج نأمل منك تعبئته🤗. لأي استفسار يرجى التواصل مع 0926910314 ");
    const catName = encodeURIComponent(button.getAttribute('data-catname'));
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSfMbxdqROZ7DjciGTTlvNsM9T9UQl8yBJ1-jv15sxyKPSbs5g/viewform?usp=pp_url&entry.1234567890=${catName}`;
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

