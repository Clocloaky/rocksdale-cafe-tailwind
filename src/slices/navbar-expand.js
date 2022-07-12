
export function hideAddress() {
    if (window.scrollY > 150) {
        document.getElementById("top-address").className = "hidden";
        document.getElementById("logo").className = "hidden md:block md:w-[80px] md:m-auto"
    }
    else {
        document.getElementById("top-address").className = "hidden md:block text-center";
        document.getElementById("logo").className = "hidden md:flex md:justify-center";
    }
}