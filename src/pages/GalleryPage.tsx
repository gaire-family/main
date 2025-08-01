import React, { useState } from 'react';
import { galleryData, type Album, type Photo } from '../data/galleryData';
import { X, ArrowLeft } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="page-container gallery-page">
      <div className="gallery-hero">
        <h1>Photo Gallery</h1>
        <p>A collection of moments from our community events.</p>
      </div>

      {!selectedAlbum ? (
        <div className="album-grid">
          {galleryData.map((album) => (
            <div key={album.id} className="album-card" onClick={() => openAlbum(album)}>
              <img src={album.coverUrl} alt={album.title} className="album-cover" />
              <div className="album-overlay">
                <h3 className="album-title">{album.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="album-view">
          <button className="back-to-albums" onClick={closeAlbum}>
            <ArrowLeft size={20} /> Back to Albums
          </button>
          <h2>{selectedAlbum.title}</h2>
          <div className="photo-grid">
            {selectedAlbum.photos.map((photo) => (
              <div key={photo.id} className="photo-card" onClick={() => openPhoto(photo)}>
                <img src={photo.imageUrl} alt={photo.caption} className="photo-thumbnail" />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedPhoto && (
        <div className="lightbox" onClick={closePhoto}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.imageUrl} alt={selectedPhoto.caption} className="lightbox-image" />
            <p className="lightbox-caption">{selectedPhoto.caption}</p>
            <button className="lightbox-close" onClick={closePhoto}>
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;