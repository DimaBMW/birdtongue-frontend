import Code from '@editorjs/Code'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import EditorJS, { OutputData } from '@editorjs/editorjs'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import Link from '@editorjs/link'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Quote from '@editorjs/quote'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import { useEffect, useRef } from 'react'

//props
type Props = {
	data?: OutputData
	onSave(val: OutputData): void
	holder: string
}
const EditorBlock = ({ data, onSave, holder }: Props) => {
	//add a reference to editor
	const ref = useRef<EditorJS>()
	//initialize editorjs
	useEffect(() => {
		const dataEdit=localStorage.getItem('editor');
		const initialData = dataEdit ? JSON.parse(dataEdit) : {};
		//initialize editor if we don't have a reference
		if (!ref.current) {
			const editor = new EditorJS({
				holder: holder,
        tools: {
          header: Header,
          code: Code,
          image: Image,
          checklist: CheckList,
          embed: Embed,
          inlineCode: InlineCode,
					link: Link,
					list: List,
					quote: Quote,
					simpleImage: SimpleImage,
					delimiter: Delimiter,
					table: Table,
					warning: Warning,
					marker: Marker,
        },
				
				placeholder: 'Here is your text',
				data:initialData,
        async onChange(api) {
          const data = await api.saver.save();
          // console.log(data);
					localStorage.setItem('editor',JSON.stringify(data));
					onSave(data);
        },
        hideToolbar: false,
			})
			ref.current = editor
		}
		//add a return function handle cleanup
		return () => {
			if (ref.current && ref.current.destroy) {
				ref.current.destroy()
			}
		}
	}, [])

	return <div id={holder} />
}

export default EditorBlock
