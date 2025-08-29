import useAppSettingsStateContext from "../../../contexts/AppSettingsControlState";
import { saveImage, deleteImage } from "../../../indexedDB/idb";

export function Menu_BackgroundSelect() {
  const { controls_appBackground, changeAppBGColor, uploadAppBGImg } =
    useAppSettingsStateContext();

  const handleColorChange = (e) => {
    changeAppBGColor(e.target.value);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = URL.createObjectURL(file);
        uploadAppBGImg(url);
        await saveImage("backgroundImage", file);
      } catch (error) {
        console.error("Error saving image to IndexedDB:", error);
        alert("Failed to save image. Please try again.");
      }
    }
  };

  const handleRemoveImage = async () => {
    try {
      uploadAppBGImg("");
      await deleteImage("backgroundImage");
    } catch (error) {
      console.error("Error removing image from IndexedDB:", error);
      alert("Failed to remove image. Please try again.");
    }
  };

  return (
    <div className="w-full h-full p-6 bg-white rounded-xl shadow-md flex flex-col space-y-6 overflow-y-auto">
      <h2 className="text-xl sm:text-2xl text-gray-800 font-medium">Background Settings</h2>

      {/* Color Picker */}
      <div>
        <label className="block text-gray-600 text-sm uppercase tracking-wide mb-2">
          🎨 Select Background Color
        </label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={controls_appBackground.bgColor}
            onChange={handleColorChange}
            className="w-12 h-10 rounded-md cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
          />
          <span className="text-sm text-gray-700 font-mono">
            {controls_appBackground.bgColor}
          </span>
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-gray-600 text-sm uppercase tracking-wide mb-2">
          🖼️ Upload Background Image
        </label>
        <div>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
            <span className="text-3xl mb-2">⬆️</span>
            <span className="text-sm text-gray-600">Click or drag to upload</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Uploaded Image Preview */}
        {controls_appBackground.bgUploadImagePath && (
          <div className="mt-4">
            <p className="text-gray-600 text-sm mb-2">Preview:</p>
            <div className="relative inline-block">
              <img
                src={controls_appBackground.bgUploadImagePath}
                alt="Uploaded preview"
                className="rounded-lg shadow-md max-w-full h-auto max-h-48"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-bold text-red-500 shadow-md hover:bg-red-100 transition-all"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
