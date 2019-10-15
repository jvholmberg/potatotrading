import React, { Fragment, useState } from 'react';
import { Formik, Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import _ from 'lodash';

import { createUUIDV4 } from '../../utils/uuid';
import { Input, Button } from '../../components';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import { Table, THead, TH, TBody, TD, TR } from './styles';

const CreateSessionSchema = Yup.object().shape({
		name: Yup.string()
			.required('Required'),
		exercises: Yup.array().of(Yup.object().shape({
			name: Yup.string()
				.required('Required'),
			comment: Yup.string(),
		}))
  });

const Exercises = ({ formProps, props }) => (
	<FieldArray
		name='exercises'
		render={(arrayHelper) => (
			<Table>
				<THead>
					<TR>
						<TH>
							<Button.Secondary
								type='button'
								onClick={() => arrayHelper.push({ name: '', comment: '', key: createUUIDV4() })}
								disabled={props.submitting}>
								Add exercise
							</Button.Secondary>
						</TH>
					</TR>
				</THead>
				<TBody>
					{formProps.values.exercises && formProps.values.exercises.map((exercise, index) => (
						<TR key={exercise.key}>
							<TD>
								<Field
									name={`exercises.${index}.name`}
									render={({ field }) => (
										<Input.Text
											{...field}
											error={_.get(formProps, `touched.${field.name}`) && _.get(formProps, `errors.${field.name}`)}
											label='Name' />
									)} />
							</TD>
							<TD>
								<Field
									name={`exercises.${index}.comment`}
									render={({ field }) => (
										<Input.Text
											{...field}
											error={_.get(formProps, `touched.${field.name}`) && _.get(formProps, `errors.${field.name}`)}
											label='Comment' />
									)} />
							</TD>
						</TR>
					))}
				</TBody>
			</Table>
		)} />
);

const CreateSession = (props) => {
	
	return (
		<Formik
			initialValues={{
				name: '',
				exercises: [],
			}}
			validationSchema={CreateSessionSchema}
			onSubmit={props.createSession}
			render={(formProps) => (
				<form onSubmit={formProps.handleSubmit}>
					<Input.Text
						name='title'
						label='Title'
						onChange={formProps.handleChange}
						onBlur={formProps.handleBlur}
						value={formProps.values.title}
						error={formProps.touched.title && formProps.errors.title} />
					<Exercises
						formProps={formProps}
						props={props} />
					<Button.Primary
						type='submit'
						disabled={props.submitting}>
						Create
					</Button.Primary>
				</form>
			)} />
	);
};

CreateSession.propTypes = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateSession);