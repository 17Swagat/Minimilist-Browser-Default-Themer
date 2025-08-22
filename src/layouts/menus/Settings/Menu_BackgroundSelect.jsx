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
        uploadAppBGImg(url); // Update context with URL
        await saveImage("backgroundImage", file); // Save Blob to IndexedDB
      } catch (error) {
        console.error("Error saving image to IndexedDB:", error);
        alert("Failed to save image. Please try again.");
      }
    }
  };

  const handleRemoveImage = async () => {
    try {
      uploadAppBGImg(""); // Clear context (revokes URL internally)
      await deleteImage("backgroundImage"); // Remove from IndexedDB
    } catch (error) {
      console.error("Error removing image from IndexedDB:", error);
      alert("Failed to remove image. Please try again.");
    }
  };

  return (
    <div className="w-[100%] h-[380px] p-6 flex flex-col bg-gray-300 shadow-lg space-y-8">
      {/* Color Picker */}
      <div className="p-4 bg-white rounded-xl shadow-md">
        <label className="block text-gray-800 font-medium mb-3">
          🎨 Select Background Color = {controls_appBackground.bgColor}
        </label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={controls_appBackground.bgColor}
            onChange={handleColorChange}
            className="w-14 h-10 rounded-md cursor-pointer border border-gray-300 shadow-sm"
          />
          <span className="text-gray-700 font-mono">
            {controls_appBackground.bgColor}
          </span>
        </div>
      </div>

      {/* Image Upload */}
      <div className="p-4 bg-white rounded-xl shadow-md overflow-y-auto">
        <label className="block text-gray-800 font-medium mb-3">
          🖼️ Upload an Image
        </label>
        <div>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
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
          <div className="mt-6">
            <p className="text-gray-600 mb-2">Preview:</p>
            <div className="relative inline-block">
              <img
                src={controls_appBackground.bgUploadImagePath}
                alt="Uploaded preview"
                className="rounded-lg shadow-md max-h-48"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-bold text-red-500 shadow-md hover:bg-red-100 transition"
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

