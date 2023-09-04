import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  Upload,
  Space,
  Collapse,
  Modal,
  Divider,
} from "antd";
import Names from "../../components/names";

import ImgCrop from "antd-img-crop";
import "./style.scss";

const { TextArea } = Input;
const { Dragger } = Upload;
const { Panel } = Collapse;

const Qualification = () => {
  const [items, setItems] = useState([
    { name: "", description: "", files: [], fileURLs: [] },
  ]);
  const [collapseItems, setCollapseItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstEntryAdded, setFirstEntryAdded] = useState(false);

  const handleInputChange = (index, type, value) => {
    const newItems = [...items];
    newItems[index][type] = value;
    setItems(newItems);
  };

  const displayFile = (fileURL, fileType) => {
    if (fileType.match(/image\/(png|jpg|jpeg|svg+xml)/)) {
      return (
          <div className={"img"}>
        <img
          src={fileURL}
          alt="Uploaded"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
          </div>
      );
    }
    return <p>Файл: {fileType}</p>;
  };

  const finishAdding = () => {
    setCollapseItems([...collapseItems, ...items]);
    if (!firstEntryAdded) {
      setFirstEntryAdded(true);
    } else {
      setIsModalVisible(false);
    }
    setItems([{ name: "", description: "", files: [], fileURLs: [] }]);
  };

  const startNewAddition = () => {
    if (firstEntryAdded) {
      setIsModalVisible(true);
    }
    setItems([{ name: "", description: "", files: [], fileURLs: [] }]);
  };

  return (
    <div className={"container_mobile qualification back_ground"}>
      <Names name={"Квалификация"} title={"Назад"} />

      {firstEntryAdded ? (
        <Modal
          className={"modal_qualification"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={[
            <Button key="submit" type="primary" onClick={finishAdding}>
              Добавить
            </Button>,
          ]}
        >
          {items.map((item, index) => (
            <Space direction="vertical" key={index} style={{ width: "100%" }}>
              <Form.Item label="Название" className={"test"}>
                <Input
                  value={item.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item label="Описание">
                <TextArea
                  value={item.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item label="Загрузить файл">
                <ImgCrop rotationSlider>
                  <Dragger
                    beforeUpload={(file) => {
                      const newFiles = [...items[index].files, file];
                      const newFileURLs = [
                        ...items[index].fileURLs,
                        URL.createObjectURL(file),
                      ];

                      handleInputChange(index, "files", newFiles);
                      handleInputChange(index, "fileURLs", newFileURLs);
                      return false;
                    }}
                  >
                    <p className="ant-upload-text">
                      Кликните или перетащите файл сюда
                    </p>
                  </Dragger>
                </ImgCrop>
              </Form.Item>
            </Space>
          ))}
        </Modal>
      ) : (
        <div>
          {items.map((item, index) => (
            <Space direction="vertical" key={index} style={{ width: "100%" }}>
              <Form.Item label="Название">
                <Input
                  value={item.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item label="Описание">
                <TextArea
                  value={item.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item label="Загрузить файл">
                <ImgCrop rotationSlider>
                  <Dragger
                    multiple={true}
                    beforeUpload={(file) => {
                      const newFiles = [...items[index].files, file];
                      const newFileURLs = [
                        ...items[index].fileURLs,
                        URL.createObjectURL(file),
                      ];

                      handleInputChange(index, "files", newFiles);
                      handleInputChange(index, "fileURLs", newFileURLs);
                      return false;
                    }}
                  >
                    <p className="ant-upload-text">
                      Кликните или перетащите файл сюда
                    </p>
                  </Dragger>
                </ImgCrop>
              </Form.Item>
            </Space>
          ))}
          <Button
            onClick={finishAdding}
            style={{ width: "100%", marginTop: "20px" }}
          >
            Добавить
          </Button>
        </div>
      )}

      <Collapse accordion>
        {collapseItems.map((item, index) => (
          <Panel header={item.name} key={index}>
            <p className={"text"}>{item.description}</p>
            <Divider />
            <div className={"img_content"}>
            {item?.files?.map((file, fileIndex) =>
              displayFile(item.fileURLs[fileIndex], file.type)
            )}
            </div>
          </Panel>
        ))}
      </Collapse>

      {firstEntryAdded && (
        <Button
          onClick={startNewAddition}
          style={{ width: "100%", marginTop: "20px" }}
        >
          Добавить еще
        </Button>
      )}
    </div>
  );
};

export default Qualification;
