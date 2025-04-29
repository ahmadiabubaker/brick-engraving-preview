document.addEventListener('DOMContentLoaded', function () {
  const updatePreview = () => {
    document.getElementById('preview-line1').textContent = document.getElementById('input_18_28')?.value || '';
    document.getElementById('preview-line2').textContent = document.getElementById('input_18_33')?.value || '';
    document.getElementById('preview-line3').textContent = document.getElementById('input_18_34')?.value || '';
  };

  // Add event listeners to all three input fields
  ['input_18_28', 'input_18_33', 'input_18_34'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePreview);
  });

  // Initialize the preview on page load
  updatePreview();
});
