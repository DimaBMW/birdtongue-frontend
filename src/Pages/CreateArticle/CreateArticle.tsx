//import librarys
import { OutputData } from '@editorjs/editorjs'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import EditorBlock from './Editor'
// import basajson from "./sadsd.json";
// import styles
import styles from './CreateArticle.module.scss'
// interface for <Create_Article>
interface InArticle {
	public: boolean;
	title: string;
	content?: OutputData;
}

const Creat_Article: React.FC = () => {
	const [editorData, setEditorData] = useState<OutputData | undefined>()
	// custom radio button
	const [isPublic, setIsPublic] = useState(true)
	const handlePublic = () => {
		setIsPublic(!isPublic)
		setValue('public', isPublic)
	}
	// react hook form
	const { register, handleSubmit, setValue } = useForm<InArticle>({
		mode: 'onChange',
		defaultValues: {
			public: false,
		},
	})
	// sending data
	const submit: SubmitHandler<InArticle> = async (data: any) => {
		setValue('content',editorData);
		console.log('seding JSON -> ', data)
	}

	

	return (
		<section className={styles.container}>
			<form className={styles.Article_form} onSubmit={handleSubmit(submit)}>
				{/* title */}
				<div className={styles.Article_form__title}>
					<div className={styles.title_name}>
						<h1>Article</h1>
					</div>
					<div className={styles.title_radio}>
						<button
							className={styles.radio}
							onClick={handlePublic}
							type='button'
						>
							<div
								className={`${styles.radio_border} ${
									!isPublic ? styles.active : ''
								}`}
							></div>
							<h2>Public</h2>
						</button>
					</div>
				</div>
				{/* Content_Editor */}
				<div className={styles.Article_form__contentEditor}>
					<div>
						<input
							type='text'
							{...register('title', {
								maxLength: {
									value: 1,
									message: 'article title cannot be empty',
								},
							})}
							placeholder='Here is your title'
							className={styles.content_name}
						/>
					</div>
					<EditorBlock
						data={editorData}
						holder='editorjs-container'
						onSave={setEditorData}
					/>
				</div>
				<div className={styles.Article_form__buttons}>
					<button type="button" className={styles.editor_btn1}>Cancel</button>
					<button className={styles.editor_btn2}>Publish</button>
				</div>
			</form>
		</section>
	)
}

export default Creat_Article
