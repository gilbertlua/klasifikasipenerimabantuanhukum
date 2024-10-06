import React from "react"
import "./Main.css"
export const Form1 = () => {
    return(   
        <div>
            <div className="custom-header">
                <p>
                SISTEM KLASIFIKASI PENERIMA BANTUAN HUKUM
                </p>
            </div>
            <form>
                {/* header */}
                <div className="custom-box border rounded">
                    <h4>Profil</h4>
                    <hr/>
                    <br/>
                    <div class="form-group text-only">
                        <label className="custom-label" for="nama">Nama</label>
                        <input type="text" class="form-control" id="nama" />
                    </div>

                    <div class="form-group text-only">
                        <label className="custom-label" for="alamat">Alamat</label>
                        <input type="text" class="form-control" id="alamat" />
                    </div>

                    
                    <div class="form-group text-only">
                        <label className="custom-label" for="np-ktp">No KTP</label>
                        <input type="text" class="form-control" id="no-ktp" />
                    </div>
                </div>

                {/* 1 */}
                <div className="custom-box border rounded">
                    <h5>Penghasilan bulanan</h5>
                    <p className="custom-span">
                    enis pekerjaan atau status pekerjaan mencakup keterangan mengenai jenis pekerjaan seseorang, apakah sebagai karyawan tetap, karyawan kontrak, pengusaha mandiri, atau mungkin sedang mengalami pengangguran. Informasi ini penting karena berhubungan dengan stabilitas pendapatan
                    </p>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="penghasilan-bulanan" id="penghasilan-bulanan-1" value="" />
                            <label class="form-check-label" for="radio1">
                                Kurang dari Rp1.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="penghasilan-bulanan" id="penghasilan-bulanan-2" value=""/>
                            <label class="form-check-label" for="penghasilan-bulanan-2">
                                Rp1.000.000 - Rp2.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="penghasilan-bulanan" id="penghasilan-bulanan-3" value=""/>
                            <label class="form-check-label" for="penghasilan-bulanan-3">
                                Rp2.000.000 - Rp4.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="penghasilan-bulanan" id="penghasilan-bulanan-4" value=""/>
                            <label class="form-check-label" for="penghasilan-bulanan-4">
                                Rp4.000.000 - Rp5.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="penghasilan-bulanan" id="penghasilan-bulanan-5" value=""/>
                            <label class="form-check-label" for="penghasilan-bulanan-5">
                                Rp4.000.000 - Rp5.000.000
                            </label>
                        </div>
                </div>
                
                {/* 2 */}
                <div className="custom-box border rounded">
                    <h5>Jenis pekerjaan atau status pekerjaan (misalnya, tetap, kontrak, pengangguran)</h5>
                    <p className="custom-span">
                        Penghasilan bulanan adalah jumlah uang yang diterima seseorang dari pekerjaan atau sumber 
                        pendapatan lainnya setiap bulannya. Penghasilan ini dapat berasal dari gaji, usaha sendiri, investasi, atau sumber pendapatan lainnya.
                    </p>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="jenis-pekerjaan" id="jenis-pekerjaan-1" value="option1" />
                            <label class="form-check-label" for="jenis-pekerjaan-1">
                                Kurang dari Rp1.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="jenis-pekerjaan" id="jenis-pekerjaan-2" value="option2"/>
                            <label class="form-check-label" for="jenis-pekerjaan-2">
                                Rp1.000.000 - Rp2.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="jenis-pekerjaan" id="jenis-pekerjaan-3" value="option3"/>
                            <label class="form-check-label" for="jenis-pekerjaan-3">
                                Rp2.000.000 - Rp4.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="jenis-pekerjaan" id="jenis-pekerjaan-4" value="option4"/>
                            <label class="form-check-label" for="jenis-pekerjaan-4">
                                Rp4.000.000 - Rp5.000.000
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="jenis-pekerjaan" id="jenis-pekerjaan-5" value="option5"/>
                            <label class="form-check-label" for="jenis-pekerjaan-5">
                                Rp4.000.000 - Rp5.000.000
                            </label>
                        </div>
                </div>

                {/* 3 */}
                <div className="custom-box border rounded">
                    <h5>Tingkat pendidikan terakhir yang diselesaikan</h5>
                    <p className="custom-span">Tingkat pendidikan terakhir yang diselesaikan merujuk pada tingkat pendidikan tertinggi yang pernah dicapai seseorang, misalnya pendidikan dasar, menengah, atau tinggi (S1, S2, S3).                         
                    </p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="tingkat-pendidikan" id="tingkat-pendidikan-1" value="tidak-sekolah" />
                        <label class="form-check-label" for="tingkat-pendidikan-1">
                            Tidak sekolah
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="tingkat-pendidikan" id="tingkat-pendidikan-2" value="sd" />
                        <label class="form-check-label" for="tingkat-pendidikan-2">
                            Sekolah Dasar
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="tingkat-pendidikan" id="tingkat-pendidikan-3" value="smp" />
                        <label class="form-check-label" for="tingkat-pendidikan-3">
                            SMP
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="tingkat-pendidikan" id="tingkat-pendidikan-4" value="sma" />
                        <label class="form-check-label" for="tingkat-pendidikan-4">
                            SMA
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="tingkat-pendidikan" id="tingkat-pendidikan-5" value="sarjana" />
                        <label class="form-check-label" for="tingkat-pendidikan-5">
                            Sarjana
                        </label>
                    </div>
                </div>

                {/* 4 */}
                <div className="custom-box border rounded">
                    <h5>Status Kepemilikan Rumah</h5>
                    <p className="custom-span">Status kepemilikan rumah mengacu pada apakah seseorang memiliki rumah sendiri atau menyewa tempat tinggal. Informasi ini penting dalam konteks perencanaan keuangan pribadi karena mempengaruhi tanggung jawab keuangan jangka panjang</p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status-rumah" id="status-rumah-1" value="tinggal-dengan-orang-lain" />
                        <label class="form-check-label" for="status-rumah-1">
                            Tinggal dengan orang lain
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status-rumah" id="status-rumah-2" value="sewa" />
                        <label class="form-check-label" for="status-rumah-2">
                            Sewa
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status-rumah" id="status-rumah-3" value="milik-sendiri" />
                        <label class="form-check-label" for="status-rumah-3">
                            Milik sendiri
                        </label>
                    </div>
                </div>

                {/* 5 */}
                <div className="custom-box border rounded">
                    <h5>Kondisi Kesehatan</h5>
                    <p className="custom-span">Kondisi kesehatan merujuk pada keadaan fisik dan mental seseorang pada saat tertentu. Informasi ini mencakup kesehatan umum, riwayat penyakit kronis, kondisi medis yang mempengaruhi kemampuan untuk bekerja, dan kebutuhan perawatan kesehatan secara rutin</p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="kondisi-kesehatan" id="kondisi-kesehatan-1" value="" />
                        <label class="form-check-label" for="kondisi-kesehatan-1">
                            Ya
                        </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="kondisi-kesehatan" id="kondisi-kesehatan-2" value="" />
                        <label class="form-check-label" for="kondisi-kesehatan-2">
                            Tidak
                        </label>
                    </div>
                </div>

                {/* 6 */}
                <div className="custom-box border rounded">
                    <h5>Bantuan Lain yang Diterima</h5>
                    <p className="custom-span">Bantuan lain yang diterima mencakup segala bentuk bantuan atau dukungan finansial yang diterima seseorang selain dari pendapatan utama mereka</p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="kondisi-kesehatan" id="bantuan-lain-1" value="" />
                        <label class="form-check-label" for="bantuan-lain-1">
                            Ya
                        </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="kondisi-kesehatan" id="bantuan-lain-2" value="" />
                        <label class="form-check-label" for="bantuan-lain-2">
                            Tidak
                        </label>
                    </div>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Proses Klasifikasi</button>
            
            
            </form>
        </div>
    )
}