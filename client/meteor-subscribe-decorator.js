/**
 * This decorator is inspired by https://subvisual.co/blog/posts/79-a-bridge-between-redux-and-meteor
 *
 * @subscribe({name: "you-collection-name", [args: {}]});
 */

import {connect} from "react-redux";
import { Component, createElement } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { Meteor } from 'meteor/meteor';

export default function subscribe(...args) {
    return function wrappedSubscribed(WrappedComponent) {

        class Subscribe extends Component {
            subs = {};
            subscriptions = args;

            constructor(props, context) {
                super(props, context);
            }

            componentWillUmount() {
                Object.keys(this.subs).map(key => this.subs[key].stop());
            }

            componentWillMount() {
                this.subscriptions.map(subscription => {
                    let {name, args} = subscription;
                    if (this.subs[name]) {
                        this.subs[name].stop();
                    }

                    this.subs[name] = Meteor.subscribe(name, args);
                });
            }

            render() {
                // TODO pass subs along ? (handy for ready state)
                return createElement(WrappedComponent,
                    this.props
                )
            }
        }

        return hoistStatics(Subscribe, WrappedComponent);
    }
}
