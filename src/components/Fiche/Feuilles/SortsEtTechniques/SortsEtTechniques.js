import './SortsEtTechniques.css';



export default function SortsEtTechniques({ prenom }) {
    return (
        <div className="sheet">
            <h1 className="sheet-title">Sorts et techniques</h1>
            <div className="newspell-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="trait"></label>
                        <input name="trait" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <input name="description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caracteristique"></label>
                        <input name="trait" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caracteristique"></label>
                        <input name="trait" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caracteristique"></label>
                        <input name="trait" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caracteristique"></label>
                        <input name="trait" />
                    </div>

                    <button type="submit" className="modal-btn">Envoyer</button>
                </form>
            </div>
        </div>
    );
}