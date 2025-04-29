document.addEventListener('gform_post_render', function() {
    // Wait for Gravity Forms to fully load
    const formId = 18; // Your form ID
    const fieldIds = ['28', '33', '34']; // Your field IDs
    
    const updatePreview = () => {
        const line1 = document.getElementById('input_' + formId + '_' + fieldIds[0])?.value || '';
        const line2 = document.getElementById('input_' + formId + '_' + fieldIds[1])?.value || '';
        const line3 = document.getElementById('input_' + formId + '_' + fieldIds[2])?.value || '';
        
        document.getElementById('preview-line1').textContent = line1;
        document.getElementById('preview-line2').textContent = line2;
        document.getElementById('preview-line3').textContent = line3;
    };

    // Add event listeners
    fieldIds.forEach(fieldId => {
        const input = document.getElementById('input_' + formId + '_' + fieldId);
        if (input) {
            input.addEventListener('input', updatePreview);
            input.addEventListener('change', updatePreview);
        }
    });

    // Initial update
    updatePreview();
});
