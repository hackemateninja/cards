// Packages
import React, { useState } from 'react';

// Definitions
import { IInput } from '@def/IInput';

// Styles
import { FormElement, FormElementLabel, FormElementIcon, FormElementSuccess, FormElementMessage, Element } from '../style';

const Input: React.FC<IInput> = ( props ) => {
	const [focus, setFocus] = useState<boolean>( false );
	const [empty, setEmpty] = useState<boolean>( props.value !== undefined ? false : true );

	const onlyNumbers = ( e: React.KeyboardEvent<HTMLInputElement> ) => !e.key.match( /^[0-9]+$/ ) && e.preventDefault();

	const handlerFocus = ( e: React.FocusEvent<HTMLInputElement> ) => {
		props.handlerFocus !== undefined && props.handlerFocus( e );
		setFocus( true );
	};
	const handlerBlur = ( e: React.FocusEvent<HTMLInputElement> ) => {
		e.target.value.length !== 0 ? setEmpty( false ) : setEmpty( true );
		props.handlerBlur !== undefined && props.handlerBlur( e );
		setFocus( false );
	};
	const handlerChange = ( e: React.ChangeEvent<HTMLInputElement> ) => props.handlerChange !== undefined && props.handlerChange( e );
	const handlerKeyPress = ( e: React.KeyboardEvent<HTMLInputElement> ) => props.onlyNumbers && onlyNumbers( e );

	return (
		<FormElement>
			<Element
				id={props.id}
				defaultValue={props.value}
				value={props.dynamicValue}
				type={props.type}
				name={props.name}
				onFocus={handlerFocus}
				onBlur={handlerBlur}
				onChange={handlerChange}
				onKeyPress={handlerKeyPress}
				maxLength={props.length}
				autoComplete={props.autocomplete}
			/>
			<FormElementSuccess success={props.success}><use xlinkHref="#icon-check" /></FormElementSuccess>
			<FormElementLabel
				htmlFor={props.id}
				active={focus || !empty}
			>{props.label}</FormElementLabel>
			{props.error &&
				<FormElementMessage>{props.message} {props.label.toLocaleLowerCase()}</FormElementMessage>
			}
		</FormElement>
	);
};

export default Input;