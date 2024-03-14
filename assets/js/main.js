const copyButton = document.querySelectorAll('.copy-btn');
const urlResetCSS = '';

const handleCopy = () => {
    const content = document.querySelector('code.code').innerHTML;
    console.log(content);

    if (content) {
        const tempEle = document.createElement('input');
        tempEle.type = 'text';
        tempEle.value = content || '777hanh777hanh';
        document.documentElement.appendChild(tempEle);
        tempEle.select();
        try {
            document.execCommand('copy');
        } catch {}
        document.documentElement.removeChild(tempEle);
    }
};

copyButton.forEach((button) => {
    button.addEventListener('click', handleCopy);
});
