
export function hideAddress() {
    if (window.scrollY > 150) {
        document.getElementById("top-address").className = "hidden";
        document.getElementById("logo").className = "hidden md:flex md:justify-center";
        document.getElementById("logoimg").className = "hidden md:flex md:justify-center w-[80px]";
    }
    else {
        document.getElementById("top-address").className = "hidden md:block text-center";
        document.getElementById("logo").className = "hidden md:flex md:justify-center";
        document.getElementById("logoimg").className = "hidden md:flex md:justify-center";
    }
}