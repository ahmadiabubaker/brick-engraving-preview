document.addEventListener('DOMContentLoaded', function () {
  const line1 = document.getElementById('input_18_28');
  const line2 = document.getElementById('input_18_33');
  const line3 = document.getElementById('input_18_34');
  const iframe = document.getElementById('brick-preview-iframe');

  function sendUpdate() {
    const data = {
      line1: line1?.value || '',
      line2: line2?.value || '',
      line3: line3?.value || ''
    };
    iframe?.contentWindow?.postMessage(data, '*');
  }

  [line1, line2, line3].forEach(field => {
    field?.addEventListener('input', sendUpdate);
  });

  sendUpdate(); // Initial push
});
