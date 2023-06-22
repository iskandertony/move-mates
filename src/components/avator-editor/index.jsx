import "./style.scss";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Icon from "../icon";
import {Button} from "antd";

const AvatarComponent = (props) => {
  const {edit} = props
  const [image, setImage] = useState(false);
  const [editor, setEditor] = useState(false);
  const [preview, setPreview] = useState(false);
  const setEditorRef = (editor) => setEditor(editor);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSave = () => {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
      setPreview(canvasScaled);
    }
  };

  return edit ? (
    <div className="avatarModal">
      <input type="file" onChange={handleImageChange} />
      {image &&
          <div>
            <AvatarEditor
                image={image}
                ref={setEditorRef}
                width={250}
                height={250}
                border={50}
                scale={1.2}
            />
            <button onClick={handleSave}>Save</button>
          </div>
      }

      {preview &&
          <div>
            <p>Preview:</p>
            <img src={preview} alt="Profile Preview" />
          </div>
      }
    </div>
  ) : null;
};

export default AvatarComponent;
