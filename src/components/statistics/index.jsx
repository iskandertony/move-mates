import React from 'react';
import Icon from "../icon";
import "./style.scss"
import {Select} from "antd";
const CardStatistics = () => {
    return (
        <div className="card_statistic">
            <div className="card_left">
                <div className="content">
                    <div className="icon">
                        <Icon name={"activity"}/>
                    </div>
                    <div>
                        <div className="title">Всего клиентов</div>
                        <div className="text">Вы получили
                        </div>
                    </div>
                </div>
                <div className="number">
                    15
                </div>
            </div>
            <div className="card_right">
                <Select
                    defaultValue="В месяц"
                    style={{
                        width: 110,
                    }}
                    className={"select"}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default CardStatistics;