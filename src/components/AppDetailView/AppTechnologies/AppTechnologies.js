import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import UnOrderList from '../../UI/UnOrderList/UnOrderList';
import SecondaryHeading from '../../UI/Headings/SecondaryHeading';
import AsyncModal from '../../UI/AsyncModal/AsyncModal';

class AppTechnologies extends Component {


    state = {
        id: null,
        AppTechnologies: [],
        visible: false,
        display: 'none',
        inputVisible: 'hidden',
        confirmLoading: false,
        controls: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            }
        }
    }

    componentWillMount() {
        this.setState({
            AppTechnologies: this.props.technology
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
            inputVisible: 'hidden',
        });
    }

    handleOk = () => {

        this.setState({
            confirmLoading: true,
        })


        axios.patch(`http://127.0.0.1:8000/api/projects/${this.props.id}/`, {
            technologies: this.state.AppTechnologies,
        })
            .then(response => {
                console.log(response);
                if (response.statusText === "OK") {
                    this.setState({
                        AppTechnologies: response.data.technologies,
                        confirmLoading: false,
                        visible: false,
                    })
                }
            })


        // console.log(this.state.AppModule)
        // this.setState({
        //     confirmLoading: true,
        // })

    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
            display: 'none'
        });
    }

    editField = (name, id, index) => {

        const updateState = {
            ...this.state.controls,
            name: {
                value: this.props.technology[index].name

            }
        }
        this.setState({
            id: id,
            display: 'flex',
            controls: updateState



        })
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
            }
        };

        const newData = this.state.AppTechnologies.map(obj => {
            if (obj.id === this.state.id) // check if fieldName equals to cityId
                return {
                    ...obj,
                    name: event.target.value
                }
            return obj
        });

        this.setState({ controls: updateControls, AppTechnologies: newData });
    };

    render() {
        return (
            <div className="row col-md-12 pt-5 pl-5">
                <div className="Show-Edit-Btn row col-md-12 p-4">
                    <SecondaryHeading>Technologies</SecondaryHeading>
                    {this.props.isAdmin ?
                        <Button shape="circle"
                            style={{ backgroundColor: '#05C0BA', marginLeft: '1rem' }}
                            onClick={this.showModal}>
                            <i className='text-white fas fa-pencil-alt'></i>
                        </Button>
                        :
                        null
                    }
                    <AsyncModal visible={this.state.visible}
                        handleOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        handleCancel={this.handleCancel} >

                        <div className='row'>


                            {this.state.AppTechnologies.map((el, index) => (

                                <div className='col-6'
                                    key={el.name}>
                                    <ul>
                                        <li
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => this.editField(el.name, el.id, index)} >
                                            {el.name}
                                            {/* <UnOrderList list={this.props.module}
                                        fa="fas fa-pencil-alt"
                                        style={{ cursor: 'pointer' }}
                                        clicked={this.editField} /> */}
                                        </li>
                                    </ul>
                                </div>
                            ))}

                        </div>
                        <form >
                            <div className="form-group">
                                <input type={this.state.inputVisible}
                                    className="form-control"
                                    name="title"
                                    placeholder="Name"
                                    onChange={(event) => this.inputChangedHandler(event, 'name')}
                                    value={this.state.controls.name.value} />
                            </div>
                        </form>
                        <div className="input-group input-group-md"
                            style={{ display: this.state.display }} >
                            <input type='text'
                                className="form-control"
                                placeholder="Name"
                                aria-describedby="edit-button"
                                onChange={(event) => this.inputChangedHandler(event, 'name')}
                                value={this.state.controls.name.value} />
                            {/* 
                            <div className="input-group-append">
                                <button className="Btn-primary Btn-search btn"
                                    type="button"
                                    id="edit-button"
                                    onClick={this.updateField}>
                                    <i className="fas fa-redo-alt"></i>
                                </button>
                            </div> */}
                        </div>
                    </AsyncModal>
                </div>
                <div className="row col-md-12 ml-1">
                    <UnOrderList list={this.state.AppTechnologies} fa="fas fa-check-circle" />
                </div>
            </div>
        )
    }
}

export default AppTechnologies;