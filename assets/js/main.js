const FILE_CSS_NAME = 'reset.css';

const copyButton = document.querySelectorAll('.copy-btn');
const urlResetCSS = {
    minified: 'https://cdn.jsdelivr.net/gh/777hanh777hanh/reset-css/assets/css/resetcss/reset.min.css',
    original: 'https://cdn.jsdelivr.net/gh/777hanh777hanh/reset-css/assets/css/resetcss/reset.css',
    downloaded: '/assets/css/resetcss/reset.css',
};

const handleCopy = () => {
    const content = document.querySelector('code.code').innerHTML;

    if (content) {
        copyContent(content);
    }
};

copyButton.forEach((button) => {
    button.addEventListener('click', handleCopy);
});

// Call To Action

const addAction = (btn, action) => {
    btn.addEventListener('click', action);
};

const downloadFile = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = typeof fileName == 'string' ? fileName : FILE_CSS_NAME;
    link.click();
    link.remove();
};

const copyContent = async (content) => {
    await navigator.clipboard.writeText(content);
    console.log('URL copied to clipboard');
};

const downloadFileBtns = document.querySelectorAll('.download_file');
const copyMinifiedBtns = document.querySelectorAll('.copy_minified');
const copyOriginalBtns = document.querySelectorAll('.copy_original');

downloadFileBtns.forEach((btn) => {
    const link = urlResetCSS.downloaded;
    addAction(btn, () => downloadFile(link, FILE_CSS_NAME));
});
copyOriginalBtns.forEach((btn) => {
    const link = urlResetCSS.original;
    addAction(btn, () => copyContent(link));
});
copyMinifiedBtns.forEach((btn) => {
    const link = urlResetCSS.minified;
    addAction(btn, () => copyContent(link));
});
