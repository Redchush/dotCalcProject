import React, {Component} from 'react';
import IconBar from './IconBar'

export default class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-static-top" id="topMenu">
                <div className="container">
                    <div className="navbar-header">
                        <IconBar/>
                        <a className="navbar-brand" href="#"> Логотип </a>
                    </div>
                    <div className="collapse navbar-collapse" id="responsive-menu">
                        <ul className="nav navbar-nav">

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Открыть <b
                                    className="caret"> </b>
                                </a>
                                <ul className="dropdown-menu blockable">
                                    <li>
                                        <form className="navbar-form pull-left" id="fileLoader">
                                            <p> Выберите файл для загрузки </p>
                                            <input type="file" id="files" name="files[]"/>
                                        </form>
                                    </li>

                                </ul>
                            </li>
                            <li className="dropdown"> Очистить
                                <buttom type="buttom" id="resetImage" value="Очистить"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}