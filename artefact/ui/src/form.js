import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://orldlltjpubfiidsueec.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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