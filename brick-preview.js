document.addEventListener('DOMContentLoaded', function () {
  const updatePreview = () => {
    document.getElementById('preview-line1').textContent = document.getElementById('input_28')?.value || '';
    document.getElementById('preview-line2').textContent = document.getElementById('input_33')?.value || '';
    document.getElementById('preview-line3').textContent = document.getElementById('input_34')?.value || '';
  };

  ['input_28', 'input_33', 'input_34'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePreview);
  });

  updatePreview();
});
