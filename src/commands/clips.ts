import { SynchronousCode } from '../codes'
import { NamedMessage, ResponseMessage } from '../message'
import { AbstractCommand } from './abstractCommand'

export interface ClipDetail {
    name: string,
    startTime: string,
    duration: string
}

export interface ClipInfo {
	clipId: string
	clipDetails: ClipDetail
}

export interface ClipsCommandResponse {
	clipCount: number
	clips: ClipInfo[]
}

export class ClipsCommand extends AbstractCommand {
	expectedResponseCode = SynchronousCode.ClipInfo

	constructor() {
		super()
	}

	deserialize(msg: ResponseMessage): ClipsCommandResponse {
		const clipIds = Object.keys(msg.params).filter((x) => x !== 'clip count')
		const clips = clipIds.map((x) => {
            const details = msg.params[x].split(' ');
            const clipDetail: ClipDetail = {
                name: details[0],
                startTime: details[1],
                duration: details[2]
            }

			const clip: ClipInfo = {
				clipId: x,
				clipDetails: clipDetail,
			}

			return clip
		})

		const res: ClipsCommandResponse = {
			clipCount: parseInt(msg.params['clip count'], 10),
			clips,
		}

		return res
	}

	serialize(): NamedMessage | null {
		const res: NamedMessage = {
			name: 'clips get',
			params: {},
		}

		return res
	}
}