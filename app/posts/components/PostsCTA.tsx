export default function PostsCTA() {
    return (
        <section className="px-6 py-16 md:py-20 bg-gray-50">
            <div className="mx-auto max-w-4xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Tem uma história para compartilhar?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Junte-se à nossa comunidade de autores e compartilhe seus conhecimentos com o mundo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                        Criar post
                    </button>
                    <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>
    );
}
