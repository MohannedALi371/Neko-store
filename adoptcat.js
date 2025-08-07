  function adoptCat(button) {
    alert("شكراً! تم إرسال طلب التبني بنجاح 🐾 سيظهر لك نموذج نأمل منك تعبئته🤗💜. للاستفسار و التواصل  0926910314 ");
    const catName = encodeURIComponent(button.getAttribute('data-catname'));
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSfMbxdqROZ7DjciGTTlvNsM9T9UQl8yBJ1-jv15sxyKPSbs5g/viewform?usp=pp_url&entry.1234567890=${catName}`;
    window.open(formURL, '_blank');
  }
