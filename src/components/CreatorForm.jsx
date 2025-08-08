import React, { useState } from "react";

function CreatorForm({ onAddCreator }) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCreator(formData);
    setFormData({ name: "", url: "", description: "", imageURL: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="url"
        placeholder="URL"
        value={formData.url}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="imageURL"
        placeholder="Image URL (optional)"
        value={formData.imageURL}
        onChange={handleChange}
      />
      <button type="submit">Add Creator</button>
    </form>
  );
}

export default CreatorForm;
