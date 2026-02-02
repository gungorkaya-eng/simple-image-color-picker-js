/**
 * GK Color Picker JS (Lite Version)
 * ---------------------------------
 * A lightweight JavaScript utility to extract dominant colors from images.
 * This is the open-source engine of the GK Color Studio.
 *
 * 🔗 Full Pro Tool: https://gungorkaya.com/tools/image-color-picker/
 * 👤 Author: Gungor Kaya
 * 📄 License: MIT
 */

class GKColorPicker {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    getColor(imageSource, callback) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageSource;

        img.onload = () => {
            this.canvas.width = img.width;
            this.canvas.height = img.height;
            this.ctx.drawImage(img, 0, 0);
            
            // Lite version logic: Pick center pixel
            const x = Math.floor(img.width / 2);
            const y = Math.floor(img.height / 2);
            const pixel = this.ctx.getImageData(x, y, 1, 1).data;
            
            const colorData = {
                r: pixel[0],
                g: pixel[1],
                b: pixel[2],
                hex: "#" + ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1).toUpperCase()
            };

            if (callback) callback(colorData);
        };
    }
}
console.log("GK Color Picker Lite Loaded.");
