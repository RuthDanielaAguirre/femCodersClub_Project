const TermsAndConditions = () => {
    return (
        <div className="relative flex gap-x-3 pt-4">
            <div className="flex h-6 items-center">
                <input id="comments" name="terms-and-conditions" required type="checkbox" className="h-4 w-4 rounded border-contrast/70 text-accent" />
            </div>
            <div className="text-sm leading-4">
                <label htmlFor="terms-and--conditions" aria-required className="text-[14px] text-contrast/80">Acepto los <span className="font-bold">Términos de servício</span> y <span className="font-bold">Politica de privacidad</span> de FemCoders Club</label>
            </div>
        </div>
    )
}

export default TermsAndConditions