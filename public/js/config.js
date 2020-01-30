var config = {
	getApiUrl: () => {
		// return 'http://eplanning.asahankab.go.id/app-2020/eperencanaan/web/index.php?r=';
		return 'http://eplanning.asahankab.go.id/simulasiv2/eperencanaan/web/index.php?r=';
	},
	getMediaUrl: () => {
		return 'http://eplanning.asahankab.go.id/simulasiv2/eperencanaan/web/uploads';
	},
	getRoleName: () => {
		return 'Operator_Kecamatan'
	},
	getLinkCetakUsulanPokir: () => {
		return window.config.getApiUrl() + 'api/cetak-rekapitulasi&token=';
	},
	getLinkCetakUsulanDesa: () => {
		return window.config.getApiUrl() + 'api/cetak-rekapitulasi-desa-by-kecamatan&token=';
	},
	getLinkCetakAbsensiPokir: () => {
		return window.config.getApiUrl() + 'api/musrenbang-absensi&token=';
	},
	getLinkCetakBeritaAcaraPokir: () => {
		return window.config.getApiUrl() + 'api/berita-acara&token=';
	},
	getEnv: () => {
		return 'simulasi'
		// return 'production'
	},
	getAppName: () => {
		return 'E-Musrenbang Kecamatan'
	}
}
