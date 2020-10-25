import React, {ChangeEvent} from 'react';
import {updateStatus} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/store";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    diactivateEditMode = () => {
        this.setState({editMode: false});
        updateStatus(this.state.status);
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    };

    componentDidUpdate = (prevProps: ProfileStatusType, prevState: RootStateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    </div> : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.diactivateEditMode}
                               type="text" value={this.state.status}/>
                    </div>
                }

            </>
        )
    }
}

export default ProfileStatus