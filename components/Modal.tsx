import React from "react";
import { FiX, FiMapPin } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    title: string;
    address?: string;
    description?: string;
    hours?: string;
    image?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
}

const LocationModal: React.FC<ModalProps> = ({ isOpen, onClose, location }) => {
  if (!isOpen) return null;

  // Function to open address in Google Maps
  const openInGoogleMaps = () => {
    if (location.address) {
      const encodedAddress = encodeURIComponent(location.address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    } else if (location.coordinates) {
      const { latitude, longitude } = location.coordinates;
      window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiX size={20} />
        </button>
        <div className="flex flex-col md:flex-row">
          {/* Location Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-[500px] relative">
            <img
              src={location.image || "/assets/default-location.jpg"}
              alt={location.title || "Location"}
              className="w-full h-full object-cover"
            />
            {location.coordinates && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src="/assets/marker-orange.png" alt="" className="w-10" />
              </div>
            )}
          </div>
          {/* Location Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {location.title}
            </h3>
            {location.address && (
              <p className="text-gray-600 mb-2 flex items-center">
                <strong className="mr-1">Address:</strong>
                <button
                  onClick={openInGoogleMaps}
                  className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                >
                  {location.address}
                  <FiMapPin size={14} className="ml-1" />
                </button>
              </p>
            )}
            {location.hours && (
              <p className="text-gray-600 mb-2">
                <strong>Hours:</strong> {location.hours}
              </p>
            )}
            {location.description && (
              <p className="text-gray-600 mb-4 flex-grow">
                {location.description}
              </p>
            )}
            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-auto w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
