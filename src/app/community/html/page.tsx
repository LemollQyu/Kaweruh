import db from '@/lib/db'

const CommunityHtml = async () => {

	const komentar = await db.QuestionsHtml.findMany();
	console.log(komentar)
	
	

	return (
		<>
			<div>
				<p>CommunityHtml</p>
			</div>
			
			
			<div className="w-full px-3 lg:px-24 border-dashed border-y-[1.9px]">
				{
					komentar.map(comment => {
						console.log(comment)
						
						return (
							<>
							
								<div key={comment.id} className="w-full border-dashed border-b-[1.9px]  border-x-[1.9px]">
									 
										<p className="text-bold text-sm">{comment.nama}</p>
										<p className="text-light text-sm">{comment.waktu}</p>
										
										<div className="mt-3">
										<p className="text-end text-lg font-[Write]">{comment.pesan}</p>
										</div>
										
										
								</div>	
							</>
						)
					})
				}
			</div>
		
		</>
	
	)
}

export default CommunityHtml