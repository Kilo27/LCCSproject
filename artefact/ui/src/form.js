function Form(){
	return(
		<div>
			<form>
				<label>
					Enter Symbol
					<input type="text" name="symbol" />
				</label>
				<label>
					Enter AI Suggested Value (One Week)
					<input type="float" name="ai_suggested_value" />
				</label>
				<label>
					Enter Actual Value (One Week)
					<input type="integer" name="Actual Value" />
					</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
export default Form;